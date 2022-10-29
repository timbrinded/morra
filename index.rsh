"reach 0.1";

const Player = {
  ...hasRandom,
  getSubmission: Fun([], Tuple(UInt, UInt)),
  seeOutcome: Fun([UInt, UInt], Null),
  informTimeout: Fun([], Null),
  informDraw: Fun([], Null),
};

const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);
const winner = (hostTotal, guestTotal, total) =>
hostTotal == guestTotal ? DRAW : total == hostTotal ? A_WINS : total == guestTotal ? B_WINS : DRAW;

check(winner(1, 2, 3) == DRAW);
check(winner(1, 1, 1) == DRAW);
check(winner(6, 7, 7) == B_WINS);
check(winner(2, 1, 2) == A_WINS);

forall(UInt, (hostTotal) => {
  forall(UInt, (guestTotal) => {
    forall(UInt, (total) => assert(isOutcome(winner(hostTotal, guestTotal, total))));
  });
});

export const main = Reach.App(() => {
  const Host = Participant("Host", {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const Guest = Participant("Guest", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Host, Guest], () => {
      interact.informTimeout();
    });
  };

  Host.only(() => {
    const amt = declassify(interact.wager);
    const timer = declassify(interact.deadline);
  });
  Host.publish(amt, timer).pay(amt);
  commit();

  Guest.only(() => {
    interact.acceptWager(amt);
  });
  Guest.pay(amt).timeout(relativeTime(timer), () => closeTo(Host, informTimeout));
  var outcome = [DRAW, 0]
  invariant(balance() == 2 * amt && isOutcome(outcome[0]));
  while (outcome[0] == DRAW ) {
    commit();

    Host.only(() => {
      const _hostSubmission = interact.getSubmission();
      const [_commitHost, _saltHost] = makeCommitment(interact, _hostSubmission);
      const commitHost = declassify(_commitHost);
    });
    Host.publish(commitHost).timeout(relativeTime(timer), () => closeTo(Guest, informTimeout));
    commit();

    unknowable(Guest, Host(_hostSubmission, _saltHost));

    Guest.only(() => {
      const [guestHand, guestTotal] = declassify(interact.getSubmission());
    });
    Guest.publish(guestHand, guestTotal).timeout(relativeTime(timer), () => closeTo(Host, informTimeout));
    commit();

    Host.only(() => {
      const saltHost = declassify(_saltHost);
      const hostSubmission = declassify(_hostSubmission);
    });
    Host.publish(saltHost, hostSubmission).timeout(relativeTime(timer), () => closeTo(Guest, informTimeout));
    checkCommitment(commitHost, saltHost, hostSubmission);
    const [hostHand, hostTotal] = hostSubmission;
    outcome = [winner(hostTotal, guestTotal, hostHand + guestHand), outcome[1]+1]
    continue;
  }
  assert(outcome[0] == A_WINS || outcome[0] == B_WINS);
  transfer(2 * amt).to(outcome == A_WINS ? Host : Guest);
  commit();

  each([Host, Guest], () => {
    interact.seeOutcome(outcome[0], outcome[1]);
  });

  exit();
});
