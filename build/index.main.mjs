// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc3, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc3, ctc1, ctc1, ctc1]
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
export async function Guest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Guest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Guest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v392, v393], secs: v395, time: v394, didSend: v115, from: v391 } = txn1;
  ;
  const v404 = stdlib.safeAdd(v394, v393);
  stdlib.protect(ctc1, await interact.acceptWager(v392), {
    at: './index.rsh:52:25:application',
    fs: ['at ./index.rsh:51:13:application call to [unknown function] (defined at: ./index.rsh:51:17:function exp)'],
    msg: 'acceptWager',
    who: 'Guest'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v391, v392, v393, v404],
    evt_cnt: 0,
    funcNum: 1,
    lct: v394,
    onlyIf: true,
    out_tys: [],
    pay: [v392, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v410, time: v409, didSend: v124, from: v408 } = txn2;
      
      const v412 = stdlib.add(v392, v392);
      sim_r.txns.push({
        amt: v392,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v413 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v414 = v413;
      const v415 = v409;
      const v422 = v412;
      
      if (await (async () => {
        const v431 = v414[stdlib.checkedBigNumberify('./index.rsh:57:17:array ref', stdlib.UInt_max, '0')];
        const v432 = stdlib.eq(v431, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v432;})()) {
        const v439 = stdlib.safeAdd(v415, v393);
        sim_r.isHalt = false;
        }
      else {
        const v559 = v414[stdlib.checkedBigNumberify('./index.rsh:86:17:array ref', stdlib.UInt_max, '0')];
        const v564 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:87:12:decimal', stdlib.UInt_max, '2'), v392);
        sim_r.txns.push({
          kind: 'from',
          to: v408,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v404],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v391, v392, v393, v404],
      evt_cnt: 0,
      funcNum: 2,
      lct: v394,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v581, time: v580, didSend: v337, from: v579 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v391,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v581, time: v580, didSend: v337, from: v579 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:40:29:application',
      fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:28:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:54:60:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Guest'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v410, time: v409, didSend: v124, from: v408 } = txn2;
    const v412 = stdlib.add(v392, v392);
    ;
    const v413 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    let v414 = v413;
    let v415 = v409;
    let v422 = v412;
    
    let txn3 = txn2;
    while (await (async () => {
      const v431 = v414[stdlib.checkedBigNumberify('./index.rsh:57:17:array ref', stdlib.UInt_max, '0')];
      const v432 = stdlib.eq(v431, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v432;})()) {
      const v439 = stdlib.safeAdd(v415, v393);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v439],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v391, v392, v393, v408, v414, v422, v439],
          evt_cnt: 0,
          funcNum: 5,
          lct: v415,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v543, time: v542, didSend: v284, from: v541 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v408,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v543, time: v542, didSend: v284, from: v541 } = txn5;
        ;
        const v544 = stdlib.addressEq(v408, v541);
        const v545 = stdlib.addressEq(v391, v541);
        const v546 = v544 ? true : v545;
        stdlib.assert(v546, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:65:72:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Guest'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:40:29:application',
          fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:28:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:65:72:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Guest'
          });
        
        return;
        
        }
      else {
        const {data: [v450], secs: v452, time: v451, didSend: v155, from: v449 } = txn4;
        ;
        const v453 = stdlib.addressEq(v391, v449);
        stdlib.assert(v453, {
          at: './index.rsh:65:10:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Guest'
          });
        const v460 = stdlib.safeAdd(v451, v393);
        const v464 = stdlib.protect(ctc3, await interact.getSubmission(), {
          at: './index.rsh:71:72:application',
          fs: ['at ./index.rsh:70:15:application call to [unknown function] (defined at: ./index.rsh:70:19:function exp)'],
          msg: 'getSubmission',
          who: 'Guest'
          });
        const v465 = v464[stdlib.checkedBigNumberify('./index.rsh:71:72:application', stdlib.UInt_max, '0')];
        const v466 = v464[stdlib.checkedBigNumberify('./index.rsh:71:72:application', stdlib.UInt_max, '1')];
        
        const txn5 = await (ctc.sendrecv({
          args: [v391, v392, v393, v408, v414, v422, v450, v460, v465, v466],
          evt_cnt: 2,
          funcNum: 6,
          lct: v451,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:73:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v470, v471], secs: v473, time: v472, didSend: v170, from: v469 } = txn5;
            
            ;
            const v481 = stdlib.safeAdd(v472, v393);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v460],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v391, v392, v393, v408, v414, v422, v450, v460],
            evt_cnt: 0,
            funcNum: 7,
            lct: v451,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v525, time: v524, didSend: v250, from: v523 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v391,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v525, time: v524, didSend: v250, from: v523 } = txn6;
          ;
          const v526 = stdlib.addressEq(v408, v523);
          const v527 = stdlib.addressEq(v391, v523);
          const v528 = v526 ? true : v527;
          stdlib.assert(v528, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:73:84:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Guest'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:40:29:application',
            fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:28:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:73:84:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Guest'
            });
          
          return;
          
          }
        else {
          const {data: [v470, v471], secs: v473, time: v472, didSend: v170, from: v469 } = txn5;
          ;
          const v474 = stdlib.addressEq(v408, v469);
          stdlib.assert(v474, {
            at: './index.rsh:73:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Guest'
            });
          const v481 = stdlib.safeAdd(v472, v393);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc3],
            timeoutAt: ['time', v481],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v391, v392, v393, v408, v414, v422, v450, v470, v471, v481],
              evt_cnt: 0,
              funcNum: 9,
              lct: v472,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v507, time: v506, didSend: v216, from: v505 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v408,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v507, time: v506, didSend: v216, from: v505 } = txn7;
            ;
            const v508 = stdlib.addressEq(v408, v505);
            const v509 = stdlib.addressEq(v391, v505);
            const v510 = v508 ? true : v509;
            stdlib.assert(v510, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:80:86:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Guest'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:40:29:application',
              fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:28:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:80:86:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Guest'
              });
            
            return;
            
            }
          else {
            const {data: [v486, v487], secs: v489, time: v488, didSend: v180, from: v485 } = txn6;
            ;
            const v490 = stdlib.addressEq(v391, v485);
            stdlib.assert(v490, {
              at: './index.rsh:80:10:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Guest'
              });
            const v491 = stdlib.digest([ctc0, ctc3], [v486, v487]);
            const v492 = stdlib.digestEq(v450, v491);
            stdlib.assert(v492, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:81:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Guest'
              });
            const v493 = v487[stdlib.checkedBigNumberify('./index.rsh:82:11:array', stdlib.UInt_max, '0')];
            const v494 = v487[stdlib.checkedBigNumberify('./index.rsh:82:11:array', stdlib.UInt_max, '1')];
            const v495 = stdlib.safeAdd(v493, v470);
            const v496 = stdlib.eq(v494, v471);
            const v497 = stdlib.eq(v495, v494);
            const v498 = stdlib.eq(v495, v471);
            const v499 = v498 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v500 = v497 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v499;
            const v501 = v496 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v500;
            const v502 = v414[stdlib.checkedBigNumberify('./index.rsh:83:76:array ref', stdlib.UInt_max, '1')];
            const v503 = stdlib.safeAdd(v502, stdlib.checkedBigNumberify('./index.rsh:83:80:decimal', stdlib.UInt_max, '1'));
            const v504 = [v501, v503];
            const cv414 = v504;
            const cv415 = v488;
            const cv422 = v422;
            
            v414 = cv414;
            v415 = cv415;
            v422 = cv422;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v559 = v414[stdlib.checkedBigNumberify('./index.rsh:86:17:array ref', stdlib.UInt_max, '0')];
    const v564 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:87:12:decimal', stdlib.UInt_max, '2'), v392);
    ;
    const v578 = v414[stdlib.checkedBigNumberify('./index.rsh:91:44:array ref', stdlib.UInt_max, '1')];
    stdlib.protect(ctc1, await interact.seeOutcome(v559, v578), {
      at: './index.rsh:91:24:application',
      fs: ['at ./index.rsh:90:7:application call to [unknown function] (defined at: ./index.rsh:90:26:function exp)'],
      msg: 'seeOutcome',
      who: 'Guest'
      });
    
    return;
    }
  
  
  
  };
export async function Host(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Host expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Host expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v387 = stdlib.protect(ctc0, interact.deadline, 'for Host\'s interact field deadline');
  const v388 = stdlib.protect(ctc0, interact.wager, 'for Host\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v388, v387],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v388, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v392, v393], secs: v395, time: v394, didSend: v115, from: v391 } = txn1;
      
      sim_r.txns.push({
        amt: v392,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v404 = stdlib.safeAdd(v394, v393);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v392, v393], secs: v395, time: v394, didSend: v115, from: v391 } = txn1;
  ;
  const v404 = stdlib.safeAdd(v394, v393);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v404],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v391, v392, v393, v404],
      evt_cnt: 0,
      funcNum: 2,
      lct: v394,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v581, time: v580, didSend: v337, from: v579 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v391,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v581, time: v580, didSend: v337, from: v579 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:40:29:application',
      fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:28:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:54:60:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Host'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v410, time: v409, didSend: v124, from: v408 } = txn2;
    const v412 = stdlib.add(v392, v392);
    ;
    const v413 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    let v414 = v413;
    let v415 = v409;
    let v422 = v412;
    
    let txn3 = txn2;
    while (await (async () => {
      const v431 = v414[stdlib.checkedBigNumberify('./index.rsh:57:17:array ref', stdlib.UInt_max, '0')];
      const v432 = stdlib.eq(v431, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v432;})()) {
      const v439 = stdlib.safeAdd(v415, v393);
      const v443 = stdlib.protect(ctc1, await interact.getSubmission(), {
        at: './index.rsh:61:53:application',
        fs: ['at ./index.rsh:60:14:application call to [unknown function] (defined at: ./index.rsh:60:18:function exp)'],
        msg: 'getSubmission',
        who: 'Host'
        });
      const v446 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:62:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:60:14:application call to [unknown function] (defined at: ./index.rsh:60:18:function exp)'],
        msg: 'random',
        who: 'Host'
        });
      const v447 = stdlib.digest([ctc0, ctc1], [v446, v443]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v391, v392, v393, v408, v414, v422, v439, v447],
        evt_cnt: 1,
        funcNum: 4,
        lct: v415,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:65:10:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v450], secs: v452, time: v451, didSend: v155, from: v449 } = txn4;
          
          ;
          const v460 = stdlib.safeAdd(v451, v393);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v439],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc1, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v391, v392, v393, v408, v414, v422, v439],
          evt_cnt: 0,
          funcNum: 5,
          lct: v415,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v543, time: v542, didSend: v284, from: v541 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v408,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc1, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v543, time: v542, didSend: v284, from: v541 } = txn5;
        ;
        const v544 = stdlib.addressEq(v408, v541);
        const v545 = stdlib.addressEq(v391, v541);
        const v546 = v544 ? true : v545;
        stdlib.assert(v546, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:65:72:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Host'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:40:29:application',
          fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:28:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:65:72:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Host'
          });
        
        return;
        
        }
      else {
        const {data: [v450], secs: v452, time: v451, didSend: v155, from: v449 } = txn4;
        ;
        const v453 = stdlib.addressEq(v391, v449);
        stdlib.assert(v453, {
          at: './index.rsh:65:10:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Host'
          });
        const v460 = stdlib.safeAdd(v451, v393);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v460],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v391, v392, v393, v408, v414, v422, v450, v460],
            evt_cnt: 0,
            funcNum: 7,
            lct: v451,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v525, time: v524, didSend: v250, from: v523 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v391,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc1, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v525, time: v524, didSend: v250, from: v523 } = txn6;
          ;
          const v526 = stdlib.addressEq(v408, v523);
          const v527 = stdlib.addressEq(v391, v523);
          const v528 = v526 ? true : v527;
          stdlib.assert(v528, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:73:84:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Host'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:40:29:application',
            fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:28:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:73:84:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Host'
            });
          
          return;
          
          }
        else {
          const {data: [v470, v471], secs: v473, time: v472, didSend: v170, from: v469 } = txn5;
          ;
          const v474 = stdlib.addressEq(v408, v469);
          stdlib.assert(v474, {
            at: './index.rsh:73:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Host'
            });
          const v481 = stdlib.safeAdd(v472, v393);
          const txn6 = await (ctc.sendrecv({
            args: [v391, v392, v393, v408, v414, v422, v450, v470, v471, v481, v446, v443],
            evt_cnt: 2,
            funcNum: 8,
            lct: v472,
            onlyIf: true,
            out_tys: [ctc0, ctc1],
            pay: [stdlib.checkedBigNumberify('./index.rsh:80:10:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v486, v487], secs: v489, time: v488, didSend: v180, from: v485 } = txn6;
              
              ;
              const v493 = v487[stdlib.checkedBigNumberify('./index.rsh:82:11:array', stdlib.UInt_max, '0')];
              const v494 = v487[stdlib.checkedBigNumberify('./index.rsh:82:11:array', stdlib.UInt_max, '1')];
              const v495 = stdlib.safeAdd(v493, v470);
              const v496 = stdlib.eq(v494, v471);
              const v497 = stdlib.eq(v495, v494);
              const v498 = stdlib.eq(v495, v471);
              const v499 = v498 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v500 = v497 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v499;
              const v501 = v496 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v500;
              const v502 = v414[stdlib.checkedBigNumberify('./index.rsh:83:76:array ref', stdlib.UInt_max, '1')];
              const v503 = stdlib.safeAdd(v502, stdlib.checkedBigNumberify('./index.rsh:83:80:decimal', stdlib.UInt_max, '1'));
              const v504 = [v501, v503];
              const cv414 = v504;
              const cv415 = v488;
              const cv422 = v422;
              
              await (async () => {
                const v414 = cv414;
                const v415 = cv415;
                const v422 = cv422;
                
                if (await (async () => {
                  const v431 = v414[stdlib.checkedBigNumberify('./index.rsh:57:17:array ref', stdlib.UInt_max, '0')];
                  const v432 = stdlib.eq(v431, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v432;})()) {
                  const v439 = stdlib.safeAdd(v415, v393);
                  sim_r.isHalt = false;
                  }
                else {
                  const v559 = v414[stdlib.checkedBigNumberify('./index.rsh:86:17:array ref', stdlib.UInt_max, '0')];
                  const v564 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:87:12:decimal', stdlib.UInt_max, '2'), v392);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v408,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v481],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc1, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc1],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v391, v392, v393, v408, v414, v422, v450, v470, v471, v481],
              evt_cnt: 0,
              funcNum: 9,
              lct: v472,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v507, time: v506, didSend: v216, from: v505 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v408,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc1, ctc0, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v507, time: v506, didSend: v216, from: v505 } = txn7;
            ;
            const v508 = stdlib.addressEq(v408, v505);
            const v509 = stdlib.addressEq(v391, v505);
            const v510 = v508 ? true : v509;
            stdlib.assert(v510, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:80:86:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Host'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:40:29:application',
              fs: ['at ./index.rsh:39:9:application call to [unknown function] (defined at: ./index.rsh:39:28:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:38:28:function exp)', 'at ./index.rsh:80:86:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Host'
              });
            
            return;
            
            }
          else {
            const {data: [v486, v487], secs: v489, time: v488, didSend: v180, from: v485 } = txn6;
            ;
            const v490 = stdlib.addressEq(v391, v485);
            stdlib.assert(v490, {
              at: './index.rsh:80:10:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Host'
              });
            const v491 = stdlib.digest([ctc0, ctc1], [v486, v487]);
            const v492 = stdlib.digestEq(v450, v491);
            stdlib.assert(v492, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:81:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Host'
              });
            const v493 = v487[stdlib.checkedBigNumberify('./index.rsh:82:11:array', stdlib.UInt_max, '0')];
            const v494 = v487[stdlib.checkedBigNumberify('./index.rsh:82:11:array', stdlib.UInt_max, '1')];
            const v495 = stdlib.safeAdd(v493, v470);
            const v496 = stdlib.eq(v494, v471);
            const v497 = stdlib.eq(v495, v494);
            const v498 = stdlib.eq(v495, v471);
            const v499 = v498 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v500 = v497 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v499;
            const v501 = v496 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : v500;
            const v502 = v414[stdlib.checkedBigNumberify('./index.rsh:83:76:array ref', stdlib.UInt_max, '1')];
            const v503 = stdlib.safeAdd(v502, stdlib.checkedBigNumberify('./index.rsh:83:80:decimal', stdlib.UInt_max, '1'));
            const v504 = [v501, v503];
            const cv414 = v504;
            const cv415 = v488;
            const cv422 = v422;
            
            v414 = cv414;
            v415 = cv415;
            v422 = cv422;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v559 = v414[stdlib.checkedBigNumberify('./index.rsh:86:17:array ref', stdlib.UInt_max, '0')];
    const v564 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:87:12:decimal', stdlib.UInt_max, '2'), v392);
    ;
    const v574 = v414[stdlib.checkedBigNumberify('./index.rsh:91:44:array ref', stdlib.UInt_max, '1')];
    stdlib.protect(ctc3, await interact.seeOutcome(v559, v574), {
      at: './index.rsh:91:24:application',
      fs: ['at ./index.rsh:90:7:application call to [unknown function] (defined at: ./index.rsh:90:26:function exp)'],
      msg: 'seeOutcome',
      who: 'Host'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAOAAEIYAUJIAcoAogBmAFoMCYDAQABAQAiNQAxGEEE6ipkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAm9JIQcMQAFjSSQMQAEKSSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENP8xABI0A1cAIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgQCSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf+BkAFbNf5JNQVJIls1/VcIEDX8gASsS3H3NP0WUDT8ULAyBjQDIQtbDEQ0/zEAEkQ0A1doIDT9FjT8UAESRDT8JFs1+zT8Ils0AyEKWwg1+jT/NAMhBls0AyEIWzQDVzAgIyI0+jT+Ek0hCTT6NPsSTSM0+zT+Ek0WNANXUBAkWyMIFlAyBjQDJVtCAvZIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDQDVzAgMQASNP8xABIRRLEisgE0AyVbsggjshA0/7IHs0IDAkmBBgxAAK5IIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEGWzX+IQhbNf1XMCA1/FdQEDX7JVs1+ldoIDX5STUFSSJbNfgkWzX3gARKIcv8NPgWUDT3FlCwMgY0AyEKWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+1A0+hZQNPlQNPgWUDT3FlA09hZQKEsBVwB/ZylLAVd/IWdIIQU1ATIGNQJCAmlIIQQ0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDFsPRDT/MQASNANXACAxABIRRLEisgE0AyVbsggjshA0/7IHs0IB/UkhCQxAANlJgQQMQACRSCEENAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yEGWzX+IQhbNf1XMCA1/FdQEDX7JVs1+kk1BTX5gAQ4sCMtNPlQsDIGNAMhDFsMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPtQNPoWUDT5UDT4FlAoSwFXAH9nKUsBV38RZ0ghBzUBMgY1AkIBeiEJEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ1bD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgEdSSMMQABZSCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhDVsMRDT/iAFVNANXACA0/zQDIQhbMQCAEAAAAAAAAAABAAAAAAAAAAAyBjT/SQhCAF9IgaCNBogBJCI0ARJENARJIhJMNAISEURJNQVJIls1/yRbNf6ABKzRH8M0/xZQNP4WULA0/4gA9DIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAezX/Nf41/TX8Nfs1+jX5NP0iWyMSQQAyNP40+wg1+DT5NPoWUDT7FlA0/FA0/VA0/xZQNPgWUChLAVcAcGdIIQQ1ATIGNQJCADKxIrIBIQk0+guyCCOyEDT8sgezQgAAMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 160,
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
                "name": "v392",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v393",
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
                "name": "v392",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v393",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
                "name": "v450",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "name": "v470",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v471",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
                "name": "v486",
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
                "internalType": "struct T4",
                "name": "v487",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
                "name": "v450",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
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
                "name": "v470",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v471",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
                "name": "v486",
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
                "internalType": "struct T4",
                "name": "v487",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001fa038038062001fa08339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611c23806200037d6000396000f3fe60806040526004361061009a5760003560e01c8063832307571161006157806383230757146101135780638e31476914610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631770d96c146100a35780631e93b0f1146100b657806321642639146100da5780632c10a159146100ed5780637eea518c1461010057005b366100a157005b005b6100a16100b1366004611524565b610197565b3480156100c257600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100e836600461153c565b610409565b6100a16100fb366004611560565b610625565b6100a161010e366004611560565b6107e1565b34801561011f57600080fd5b506001546100c7565b6100a1610136366004611560565b61095f565b6100a1610149366004611560565b610afa565b34801561015a57600080fd5b50610163610cdf565b6040516100d1929190611583565b6100a161017f366004611560565b610d7c565b6100a1610192366004611560565b610f13565b6101a7600960005414602761106a565b6101c1813515806101ba57506001548235145b602861106a565b6000808055600280546101d3906115e0565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906115e0565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906116c6565b905061026e611264565b6102808261012001514310602961106a565b7f712449bbded5aa157cb3791d1d5203045cb468e42e4ba0d9e0b79495d578442633846040516102b1929190611782565b60405180910390a16102c53415602461106a565b81516102dd906001600160a01b03163314602561106a565b6040805161031f916102f99160208088013592880191016117ae565b6040516020818303038152906040528051906020012060001c8360c0015114602661106a565b60e082015161033390604085013590611090565b815261010082015160608401351461037357805160608401351461036c57610100820151815114610365576001610376565b6000610376565b6002610376565b60015b6020808301519190915260808301510151610392906001611090565b60208083015101526103a2611298565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092528381015181840180519190915280514392019190915260a0850151905190910152610403816110e3565b50505050565b610419600760005414601c61106a565b6104338135158061042c57506001548235145b601d61106a565b600080805560028054610445906115e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610471906115e0565b80156104be5780601f10610493576101008083540402835291602001916104be565b820191906000526020600020905b8154815290600101906020018083116104a157829003601f168201915b50505050508060200190518101906104d691906117cc565b90506104ee6040518060200160405280600081525090565b6104ff8260e001514310601e61106a565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f338460405161053092919061187f565b60405180910390a16105443415601a61106a565b606082015161055f906001600160a01b03163314601b61106a565b61056d438360400151611090565b81526105776112cf565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516105fa9183910161189c565b6040516020818303038152906040526002908051906020019061061e92919061134f565b5050505050565b610635600160005414600961106a565b61064f8135158061064857506001548235145b600a61106a565b600080805560028054610661906115e0565b80601f016020809104026020016040519081016040528092919081815260200182805461068d906115e0565b80156106da5780601f106106af576101008083540402835291602001916106da565b820191906000526020600020905b8154815290600101906020018083116106bd57829003601f168201915b50505050508060200190518101906106f2919061193c565b9050610714604080516060810182526000602082018181529282015290815290565b61072582606001514310600b61106a565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516107569291906119b5565b60405180910390a161076f82602001513414600861106a565b80516001905280516000602090910152610787611298565b825181516001600160a01b03909116905260208084018051835183015260408086015184519091015282513360609091015283518284018051919091525143920191909152518001602082015160400152610403816110e3565b6107f1600160005414600d61106a565b61080b8135158061080457506001548235145b600e61106a565b60008080556002805461081d906115e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610849906115e0565b80156108965780601f1061086b57610100808354040283529160200191610896565b820191906000526020600020905b81548152906001019060200180831161087957829003601f168201915b50505050508060200190518101906108ae919061193c565b90506108c28160600151431015600f61106a565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516108f39291906119b5565b60405180910390a16109073415600c61106a565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610944573d6000803e3d6000fd5b506000808055600181905561095b906002906113d3565b5050565b61096f600560005414601761106a565b6109898135158061098257506001548235145b601861106a565b60008080556002805461099b906115e0565b80601f01602080910402602001604051908101604052809291908181526020018280546109c7906115e0565b8015610a145780601f106109e957610100808354040283529160200191610a14565b820191906000526020600020905b8154815290600101906020018083116109f757829003601f168201915b5050505050806020019051810190610a2c91906119f2565b9050610a408160c00151431015601961106a565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610a719291906119b5565b60405180910390a1610a853415601561106a565b6060810151610ab9906001600160a01b03163314610aaf5781516001600160a01b03163314610ab2565b60015b601661106a565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f19350505050158015610944573d6000803e3d6000fd5b610b0a600560005414601261106a565b610b2481351580610b1d57506001548235145b601361106a565b600080805560028054610b36906115e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610b62906115e0565b8015610baf5780601f10610b8457610100808354040283529160200191610baf565b820191906000526020600020905b815481529060010190602001808311610b9257829003601f168201915b5050505050806020019051810190610bc791906119f2565b9050610bdf6040518060200160405280600081525090565b610bf08260c001514310601461106a565b6040805133815284356020808301919091528501358183015290517f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc09181900360600190a1610c413415601061106a565b8151610c59906001600160a01b03163314601161106a565b610c67438360400151611090565b8152610c71611410565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e084015260076000554360015590516105fa91839101611a99565b600060606000546002808054610cf4906115e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d20906115e0565b8015610d6d5780601f10610d4257610100808354040283529160200191610d6d565b820191906000526020600020905b815481529060010190602001808311610d5057829003601f168201915b50505050509050915091509091565b610d8c600760005414602161106a565b610da681351580610d9f57506001548235145b602261106a565b600080805560028054610db8906115e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610de4906115e0565b8015610e315780601f10610e0657610100808354040283529160200191610e31565b820191906000526020600020905b815481529060010190602001808311610e1457829003601f168201915b5050505050806020019051810190610e4991906117cc565b9050610e5d8160e00151431015602361106a565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610e8e9291906119b5565b60405180910390a1610ea23415601f61106a565b6060810151610ed6906001600160a01b03163314610ecc5781516001600160a01b03163314610ecf565b60015b602061106a565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610944573d6000803e3d6000fd5b610f23600960005414602c61106a565b610f3d81351580610f3657506001548235145b602d61106a565b600080805560028054610f4f906115e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7b906115e0565b8015610fc85780601f10610f9d57610100808354040283529160200191610fc8565b820191906000526020600020905b815481529060010190602001808311610fab57829003601f168201915b5050505050806020019051810190610fe091906116c6565b9050610ff5816101200151431015602e61106a565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516110269291906119b5565b60405180910390a161103a3415602a61106a565b6060810151610ab9906001600160a01b031633146110645781516001600160a01b03163314611067565b60015b602b5b8161095b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261109d8382611b27565b91508110156110dd5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611087565b92915050565b60408051602081019091526000815260208201515151600114156111b55761111b826020015160200151836000015160400151611090565b8152611125611482565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925280850180515160808501525182015160a0840152835160c0840152600560005543600155905161119191839101611b3f565b6040516020818303038152906040526002908051906020019061040392919061134f565b8160000151606001516001600160a01b03166108fc6111dd6002856000015160200151611205565b6040518115909202916000818181858888f19350505050158015610944573d6000803e3d6000fd5b60008115806112295750828261121b8183611bac565b92506112279083611bcb565b145b6110dd5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611087565b604051806040016040528060008152602001611293604051806040016040528060008152602001600081525090565b905290565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908152602081016112936114ec565b60405180610140016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001611326604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b82805461135b906115e0565b90600052602060002090601f01602090048101928261137d57600085556113c3565b82601f1061139657805160ff19168380011785556113c3565b828001600101855582156113c3579182015b828111156113c35782518255916020019190600101906113a8565b506113cf92915061150f565b5090565b5080546113df906115e0565b6000825580601f106113ef575050565b601f01602090049060005260206000209081019061140d919061150f565b50565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001611467604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081525090565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016114d8604051806040016040528060008152602001600081525090565b815260200160008152602001600081525090565b6040805160a08101909152600060608201818152608083019190915281906114d8565b5b808211156113cf5760008155600101611510565b60006080828403121561153657600080fd5b50919050565b60006060828403121561153657600080fd5b60006040828403121561153657600080fd5b60006040828403121561157257600080fd5b61157c838361154e565b9392505050565b82815260006020604081840152835180604085015260005b818110156115b75785810183015185820160600152820161159b565b818111156115c9576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806115f457607f821691505b6020821081141561153657634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561164757634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461166457600080fd5b919050565b60006040828403121561167b57600080fd5b6040516040810181811067ffffffffffffffff821117156116ac57634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b600061016082840312156116d957600080fd5b6116e1611615565b6116ea8361164d565b8152602083015160208201526040830151604082015261170c6060840161164d565b606082015261171e8460808501611669565b608082015260c083015160a082015260e083015160c08201526101008084015160e083015261012080850151828401526101408501518184015250508091505092915050565b8035825261095b602083016020830180358252602090810135910152565b6001600160a01b0383168152813560208083019190915260a082019061157c9060408401908501611764565b8281526060810161157c602083018480358252602090810135910152565b600061012082840312156117df57600080fd5b60405161010080820182811067ffffffffffffffff8211171561181257634e487b7160e01b600052604160045260246000fd5b60405261181e8461164d565b825260208401516020830152604084015160408301526118406060850161164d565b60608301526118528560808601611669565b608083015260c084015160a083015260e084015160c08301528084015160e0830152508091505092915050565b6001600160a01b03831681526080810161157c6020830184611764565b81516001600160a01b031681526101608101602083015160208301526040830151604083015260608301516118dc60608401826001600160a01b03169052565b5060808301516118f9608084018280518252602090810151910152565b5060a083015160c083015260c083015160e083015260e0830151610100818185015280850151915050610120818185015280850151610140850152505092915050565b60006080828403121561194e57600080fd5b6040516080810181811067ffffffffffffffff8211171561197f57634e487b7160e01b600052604160045260246000fd5b60405261198b8361164d565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146119e357600080fd5b80604085015250509392505050565b60006101008284031215611a0557600080fd5b60405160e0810181811067ffffffffffffffff82111715611a3657634e487b7160e01b600052604160045260246000fd5b604052611a428361164d565b81526020830151602082015260408301516040820152611a646060840161164d565b6060820152611a768460808501611669565b608082015260c083015160a082015260e083015160c08201528091505092915050565b81516001600160a01b039081168252602080840151908301526040808401519083015260608084015190911690820152608080830151610120830191611aeb9084018280518252602090810151910152565b5060a083015160c083015260c083015160e083015260e083015161010083015292915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611b3a57611b3a611b11565b500190565b81516001600160a01b039081168252602080840151908301526040808401519083015260608084015190911690820152608080830151610100830191611b919084018280518252602090810151910152565b5060a083015160c083015260c083015160e083015292915050565b6000816000190483118215151615611bc657611bc6611b11565b500290565b600082611be857634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212204fdba5551b55ed5879ee1c01cf7c194b8ce67f3ec057a0bac151aff0ddbd396e64736f6c634300080c0033`,
  BytecodeLen: 8096,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:54:60:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:88:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:58:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:65:72:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:66:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:73:84:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:80:86:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Guest": Guest,
  "Host": Host
  };
export const _APIs = {
  };
