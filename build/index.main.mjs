// Automatically generated with Reach 0.1.12 (1f18a9f3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f18a9f3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v214 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v217 = stdlib.protect(ctc1, await interact.getSubmission(), {
    at: './index.rsh:37:52:application',
    fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:17:function exp)'],
    msg: 'getSubmission',
    who: 'Alice'
    });
  const v220 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:38:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v221 = stdlib.digest([ctc0, ctc1], [v220, v217]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v221, v214],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:41:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc0],
    pay: [v214, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v224, v225], secs: v227, time: v226, didSend: v121, from: v223 } = txn1;
      
      sim_r.txns.push({
        amt: v225,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v224, v225], secs: v227, time: v226, didSend: v121, from: v223 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v238, v239], secs: v241, time: v240, didSend: v137, from: v237 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v223, v224, v225, v237, v238, v239, v220, v217],
    evt_cnt: 2,
    funcNum: 2,
    lct: v240,
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v247, v248], secs: v250, time: v249, didSend: v147, from: v246 } = txn3;
      
      ;
      const v254 = v248[stdlib.checkedBigNumberify('./index.rsh:58:9:array', stdlib.UInt_max, '0')];
      const v255 = v248[stdlib.checkedBigNumberify('./index.rsh:58:9:array', stdlib.UInt_max, '1')];
      const v256 = stdlib.safeAdd(v254, v239);
      const v257 = stdlib.eq(v255, v238);
      const v258 = stdlib.eq(v256, v255);
      const v259 = stdlib.eq(v256, v238);
      const v260 = v259 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v261 = v258 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v260;
      const v262 = v257 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v261;
      const v263 = stdlib.eq(v262, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v264 = stdlib.eq(v262, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v265 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v266 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v267 = v264 ? v265 : v266;
      const v268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v269 = v263 ? v268 : v267;
      const v270 = v269[stdlib.checkedBigNumberify('./index.rsh:62:9:array', stdlib.UInt_max, '0')];
      const v271 = v269[stdlib.checkedBigNumberify('./index.rsh:62:9:array', stdlib.UInt_max, '1')];
      const v272 = stdlib.safeMul(v270, v225);
      sim_r.txns.push({
        kind: 'from',
        to: v223,
        tok: undefined /* Nothing */
        });
      const v277 = stdlib.safeMul(v271, v225);
      sim_r.txns.push({
        kind: 'from',
        to: v237,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc2, ctc0, ctc4, ctc0, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v247, v248], secs: v250, time: v249, didSend: v147, from: v246 } = txn3;
  ;
  const v251 = stdlib.addressEq(v223, v246);
  stdlib.assert(v251, {
    at: './index.rsh:55:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v252 = stdlib.digest([ctc0, ctc1], [v247, v248]);
  const v253 = stdlib.digestEq(v224, v252);
  stdlib.assert(v253, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:56:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v254 = v248[stdlib.checkedBigNumberify('./index.rsh:58:9:array', stdlib.UInt_max, '0')];
  const v255 = v248[stdlib.checkedBigNumberify('./index.rsh:58:9:array', stdlib.UInt_max, '1')];
  const v256 = stdlib.safeAdd(v254, v239);
  const v257 = stdlib.eq(v255, v238);
  const v258 = stdlib.eq(v256, v255);
  const v259 = stdlib.eq(v256, v238);
  const v260 = v259 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  const v261 = v258 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v260;
  const v262 = v257 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v261;
  const v263 = stdlib.eq(v262, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v264 = stdlib.eq(v262, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v265 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v266 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v267 = v264 ? v265 : v266;
  const v268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v269 = v263 ? v268 : v267;
  const v270 = v269[stdlib.checkedBigNumberify('./index.rsh:62:9:array', stdlib.UInt_max, '0')];
  const v271 = v269[stdlib.checkedBigNumberify('./index.rsh:62:9:array', stdlib.UInt_max, '1')];
  const v272 = stdlib.safeMul(v270, v225);
  ;
  const v277 = stdlib.safeMul(v271, v225);
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v262), {
    at: './index.rsh:71:24:application',
    fs: ['at ./index.rsh:70:7:application call to [unknown function] (defined at: ./index.rsh:70:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v224, v225], secs: v227, time: v226, didSend: v121, from: v223 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v225), {
    at: './index.rsh:45:25:application',
    fs: ['at ./index.rsh:44:11:application call to [unknown function] (defined at: ./index.rsh:44:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v232 = stdlib.protect(ctc3, await interact.getSubmission(), {
    at: './index.rsh:46:66:application',
    fs: ['at ./index.rsh:44:11:application call to [unknown function] (defined at: ./index.rsh:44:15:function exp)'],
    msg: 'getSubmission',
    who: 'Bob'
    });
  const v233 = v232[stdlib.checkedBigNumberify('./index.rsh:46:66:application', stdlib.UInt_max, '0')];
  const v234 = v232[stdlib.checkedBigNumberify('./index.rsh:46:66:application', stdlib.UInt_max, '1')];
  
  const txn2 = await (ctc.sendrecv({
    args: [v223, v224, v225, v234, v233],
    evt_cnt: 2,
    funcNum: 1,
    lct: v226,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [v225, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v238, v239], secs: v241, time: v240, didSend: v137, from: v237 } = txn2;
      
      sim_r.txns.push({
        amt: v225,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v238, v239], secs: v241, time: v240, didSend: v137, from: v237 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc1, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v247, v248], secs: v250, time: v249, didSend: v147, from: v246 } = txn3;
  ;
  const v251 = stdlib.addressEq(v223, v246);
  stdlib.assert(v251, {
    at: './index.rsh:55:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v252 = stdlib.digest([ctc1, ctc3], [v247, v248]);
  const v253 = stdlib.digestEq(v224, v252);
  stdlib.assert(v253, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:56:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v254 = v248[stdlib.checkedBigNumberify('./index.rsh:58:9:array', stdlib.UInt_max, '0')];
  const v255 = v248[stdlib.checkedBigNumberify('./index.rsh:58:9:array', stdlib.UInt_max, '1')];
  const v256 = stdlib.safeAdd(v254, v239);
  const v257 = stdlib.eq(v255, v238);
  const v258 = stdlib.eq(v256, v255);
  const v259 = stdlib.eq(v256, v238);
  const v260 = v259 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  const v261 = v258 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v260;
  const v262 = v257 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v261;
  const v263 = stdlib.eq(v262, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v264 = stdlib.eq(v262, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v265 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v266 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v267 = v264 ? v265 : v266;
  const v268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v269 = v263 ? v268 : v267;
  const v270 = v269[stdlib.checkedBigNumberify('./index.rsh:62:9:array', stdlib.UInt_max, '0')];
  const v271 = v269[stdlib.checkedBigNumberify('./index.rsh:62:9:array', stdlib.UInt_max, '1')];
  const v272 = stdlib.safeMul(v270, v225);
  ;
  const v277 = stdlib.safeMul(v271, v225);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v262), {
    at: './index.rsh:71:24:application',
    fs: ['at ./index.rsh:70:7:application call to [unknown function] (defined at: ./index.rsh:70:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAFAAECCEAmAgEAACI1ADEYQQI4KWRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAFnSSQMQAD0JBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+gWhbNf1JNQVJIls1/FcIEDX7gATwBmOqNPwWUDT7ULA0/zEAEkQ0A1cgIDT8FjT7UAESRDT7JVs1+jT7Ils0A4FwWwg1+SMiNPk0/RJNJDT5NPoSTSM0+jT9Ek01+IAQAAAAAAAAAAEAAAAAAAAAAYAQAAAAAAAAAAAAAAAAAAAAAjT4IhJNgBAAAAAAAAAAAgAAAAAAAAAANPgkEk0197EisgE09yJbNP4LsggjshA0/7IHs7EisgE09yVbNP4LsggjshA0A1dIILIHs0IAwUgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyAgNf4hBFs1/Uk1BUkiWzX8JVs1+4AEx7YK1TT8FlA0+xZQsDT9iADnNP80/lA0/RZQMQBQNPwWUDT7FlAoSwFXAHhnSCQ1ATIGNQJCAHBIgaCNBogAuSI0ARJENARJIhJMNAISEURJNQVJVwAgNf+BIFs1/oAE2/BFDzT/UDT+FlCwNP6IAIgxADT/UDT+FlAoSwFXAEhnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 120,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v224",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v224",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v238",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v239",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v247",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T6",
                "name": "v248",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v238",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v239",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v247",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T6",
                "name": "v248",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000eb938038062000eb9833981016040819052620000269162000237565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1602080820151015162000094903414600762000130565b620000c2604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252600160008190554390558051808501959095529151848301525160608085019190915281518085039091018152608090930190528151620001279260029201906200015a565b505050620002d4565b81620001565760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001689062000297565b90600052602060002090601f0160209004810192826200018c5760008555620001d7565b82601f10620001a757805160ff1916838001178555620001d7565b82800160010185558215620001d7579182015b82811115620001d7578251825591602001919060010190620001ba565b50620001e5929150620001e9565b5090565b5b80821115620001e55760008155600101620001ea565b604080519081016001600160401b03811182821017156200023157634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024b57600080fd5b6200025562000200565b835181526040601f19830112156200026c57600080fd5b6200027662000200565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002ac57607f821691505b60208210811415620002ce57634e487b7160e01b600052602260045260246000fd5b50919050565b610bd580620002e46000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806342ae229d146100785780638100840f1461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046108c9565b6100d6565b6100526100993660046108e1565b6102e9565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c86105d9565b60405161006f9291906108f3565b6100e66001600054146009610676565b610100813515806100f957506001548235145b600a610676565b60008080556002805461011290610950565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610950565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906109a1565b90507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd9333836040516101d6929190610a2e565b60405180910390a16101ef816040015134146008610676565b61023a6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b039081168083526020808501518185019081526040808701518187019081523360608089019182528a8601356080808b019182528c86013560a0808d019182526002600055436001558751998a019a909a529651958801959095529251908601525190951690830152925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906102e3929190610752565b50505050565b6102f9600260005414600e610676565b6103138135158061030c57506001548235145b600f610676565b60008080556002805461032590610950565b80601f016020809104026020016040519081016040528092919081815260200182805461035190610950565b801561039e5780601f106103735761010080835404028352916020019161039e565b820191906000526020600020905b81548152906001019060200180831161038157829003601f168201915b50505050508060200190518101906103b69190610a52565b90506103c06107d6565b7f251169be01610ac25164ab2a29a9e5b68988c79c67c6eea23ffb09f3b6b075ce33846040516103f1929190610ae6565b60405180910390a16104053415600b610676565b815161041d906001600160a01b03163314600c610676565b6040805161045f91610439916020808801359288019101610b12565b6040516020818303038152906040528051906020012060001c836020015114600d610676565b60a0820151610473906040850135906106a0565b815260808201516060840135146104b15780516060840135146104aa5760808201518151146104a35760016104b4565b60006104b4565b60026104b4565b60015b602080830191825260408301805160009081905290516002908301819052606085018051600190819052905184015260808501805182905251909201529051146105165760208101511561050c57806060015161051c565b806040015161051c565b80608001515b60a082018190528251905160408401516001600160a01b03909216916108fc91610545916106f3565b6040518115909202916000818181858888f1935050505015801561056d573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc6105958360a001516020015185604001516106f3565b6040518115909202916000818181858888f193505050501580156105bd573d6000803e3d6000fd5b50600080805560018190556105d490600290610877565b505050565b6000606060005460028080546105ee90610950565b80601f016020809104026020016040519081016040528092919081815260200182805461061a90610950565b80156106675780601f1061063c57610100808354040283529160200191610667565b820191906000526020600020905b81548152906001019060200180831161064a57829003601f168201915b50505050509050915091509091565b8161069c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826106ad8382610b46565b91508110156106ed5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610693565b92915050565b6000811580610717575082826107098183610b5e565b92506107159083610b7d565b145b6106ed5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610693565b82805461075e90610950565b90600052602060002090601f01602090048101928261078057600085556107c6565b82601f1061079957805160ff19168380011785556107c6565b828001600101855582156107c6579182015b828111156107c65782518255916020019190600101906107ab565b506107d29291506108b4565b5090565b6040518060c00160405280600081526020016000815260200161080c604051806040016040528060008152602001600081525090565b815260200161082e604051806040016040528060008152602001600081525090565b8152602001610850604051806040016040528060008152602001600081525090565b8152602001610872604051806040016040528060008152602001600081525090565b905290565b50805461088390610950565b6000825580601f10610893575050565b601f0160209004906000526020600020908101906108b191906108b4565b50565b5b808211156107d257600081556001016108b5565b6000606082840312156108db57600080fd5b50919050565b6000608082840312156108db57600080fd5b82815260006020604081840152835180604085015260005b818110156109275785810183015185820160600152820161090b565b81811115610939576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061096457607f821691505b602082108114156108db57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461099c57600080fd5b919050565b6000606082840312156109b357600080fd5b6040516060810181811067ffffffffffffffff821117156109e457634e487b7160e01b600052604160045260246000fd5b6040526109f083610985565b815260208301516020820152604083015160408201528091505092915050565b8035825261069c602083016020830180358252602090810135910152565b6001600160a01b038316815260808101610a4b6020830184610a10565b9392505050565b600060c08284031215610a6457600080fd5b60405160c0810181811067ffffffffffffffff82111715610a9557634e487b7160e01b600052604160045260246000fd5b604052610aa183610985565b81526020830151602082015260408301516040820152610ac360608401610985565b60608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b0383168152813560208083019190915260a0820190610a4b9060408401908501610a10565b82815260608101610a4b602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b5957610b59610b30565b500190565b6000816000190483118215151615610b7857610b78610b30565b500290565b600082610b9a57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212206707c1656812bca5d22efd811151b3187aa48d13d6f94f1dbe7862a71b39bbb964736f6c634300080c0033`,
  BytecodeLen: 3769,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:42:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:68:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
