"reach 0.1";

const Player = {
  ...hasRandom,
  getSubmission: Fun([], Tuple(UInt, UInt)),
  seeOutcome: Fun([UInt], Null),
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
  });
  const Bob = Participant("Bob", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  Alice.only(() => {
    const amt = declassify(interact.wager);
    const _aliceSubmission = interact.getSubmission();
    const [_commitAlice, _saltAlice] = makeCommitment(interact, _aliceSubmission);
    const commitAlice = declassify(_commitAlice);
  });
  Alice.publish(commitAlice, amt).pay(amt);
  commit();

  Bob.only(() => {
    interact.acceptWager(amt);
    const [bobHand, bobTotal] = declassify(interact.getSubmission());
  });
  Bob.publish(bobTotal, bobHand).pay(amt);
  commit();
  Alice.only(() => {
    const saltAlice = declassify(_saltAlice);
    const aliceSubmission = declassify(_aliceSubmission);
  });

  Alice.publish(saltAlice, aliceSubmission);
  checkCommitment(commitAlice, saltAlice, aliceSubmission);
  
  const [aliceHand, aliceTotal ]= aliceSubmission

  const total = aliceHand + bobHand;
  const outcome = winner(aliceTotal, bobTotal, total);
  const [forAlice, forBob] = outcome == A_WINS ? [2, 0]
                           : outcome == B_WINS ? [0, 2]
                                               : [1, 1];

  transfer(forAlice * amt).to(Alice);
  transfer(forBob * amt).to(Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });

  exit();
});
