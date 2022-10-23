import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [accAlice, accBob] = await stdlib.newTestAccounts(2, startingBalance);

console.log("Launching...");
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const getBalance = async (who) => stdlib.formatCurrency(await stdlib.balanceOf(who),4)

const beforeAlice = await getBalance(accAlice)
const beforeBob = await getBalance(accBob)

const OUTCOME = ["BOB WINS", "DRAW", "ALICE WINS"];

const Player = (Who) => ({
  getSubmission: () => {
    const choice = Math.floor(Math.random() * 5);
    const submission = [choice, choice + Math.floor(Math.random() * 5)];
    console.log(`${Who} played ${submission[0]} fingers and a total of ${submission[1]}.`);
    return submission;
  },
  seeOutcome: (outcome, i) => {
    console.log(`${Who} saw outcome of ${OUTCOME[outcome]} after playing ${i} rounds.`);
  },
  informTimeout : () => {
    console.log(`${Who} has witnessed a time out!!!`)
  },
  informDraw : ()=> {
    console.log("=== Result was a DRAW, continuining to new round ===")
  }
});

await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    ...Player("Alice"),
    wager: stdlib.parseCurrency(5),
    deadline: 10,
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    ...Player("Bob"),
    acceptWager: (amt) => {
      console.log(`Bob accepts the wager of ${stdlib.formatCurrency(amt,4)}`)
    }
  }),
]);

const afterAlice = await getBalance(accAlice)
const afterBob = await getBalance(accBob)

console.log(`Alice went from ${beforeAlice} to ${afterAlice}`)
console.log(`Bob went from ${beforeBob} to ${afterBob}`)