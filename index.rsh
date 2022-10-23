"reach 0.1";

const Player = {
  ...hasRandom,
  getSubmission: Fun([], Tuple(UInt, UInt)),
  seeOutcome: Fun([UInt, UInt], Null),
  informTimeout: Fun([], Null),
  informDraw: Fun([], Null),
};

const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);
const winner = (aliceTotal, bobTotal, total) =>
  aliceTotal == bobTotal ? DRAW : total == aliceTotal ? A_WINS : total == bobTotal ? B_WINS : DRAW;

check(winner(1, 2, 3) == DRAW);
check(winner(1, 1, 1) == DRAW);
check(winner(6, 7, 7) == B_WINS);
check(winner(2, 1, 2) == A_WINS);

forall(UInt, (aliceTotal) => {
  forall(UInt, (bobTotal) => {
    forall(UInt, (total) => assert(isOutcome(winner(aliceTotal, bobTotal, total))));
  });
});

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const Bob = Participant("Bob", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    const amt = declassify(interact.wager);
    const timer = declassify(interact.deadline);
  });
  Alice.publish(amt, timer).pay(amt);
  commit();

  Bob.only(() => {
    interact.acceptWager(amt);
  });
  Bob.pay(amt).timeout(relativeTime(timer), () => closeTo(Alice, informTimeout));
  var outcome = [DRAW, 0]
  invariant(balance() == 2 * amt && isOutcome(outcome[0]));
  while (outcome[0] == DRAW ) {
    commit();

    Alice.only(() => {
      const _aliceSubmission = interact.getSubmission();
      const [_commitAlice, _saltAlice] = makeCommitment(interact, _aliceSubmission);
      const commitAlice = declassify(_commitAlice);
    });
    Alice.publish(commitAlice).timeout(relativeTime(timer), () => closeTo(Bob, informTimeout));
    commit();

    unknowable(Bob, Alice(_aliceSubmission, _saltAlice));

    Bob.only(() => {
      const [bobHand, bobTotal] = declassify(interact.getSubmission());
    });
    Bob.publish(bobHand, bobTotal).timeout(relativeTime(timer), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() => {
      const saltAlice = declassify(_saltAlice);
      const aliceSubmission = declassify(_aliceSubmission);
    });
    Alice.publish(saltAlice, aliceSubmission).timeout(relativeTime(timer), () => closeTo(Bob, informTimeout));
    checkCommitment(commitAlice, saltAlice, aliceSubmission);
    const [aliceHand, aliceTotal] = aliceSubmission;
    outcome = [winner(aliceTotal, bobTotal, aliceHand + bobHand), outcome[1]+1]
    continue;
  }
  assert(outcome[0] == A_WINS || outcome[0] == B_WINS);
  transfer(2 * amt).to(outcome == A_WINS ? Alice : Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome[0], outcome[1]);
  });

  exit();
});
