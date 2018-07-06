// @flow

type CallType = 'INCOMING' | 'OUTGOING' | 'MISSED';

type Call = {
  type: CallType,
  phoneNumber: string,
  timestamp: string,
};

type TimeStampFunction = () => string;

let defaultCreateTimestamp = () => new Date().toISOString();

function createCallLog(createTimestamp: Function = defaultCreateTimestamp) {
  let callLog: Array<Call> = [];
  return {
    add: (type: CallType, phoneNumber: string) => {
      callLog.push({
        type,
        phoneNumber,
        timestamp: createTimestamp(),
      });
    },
    getRecent: (maxNum: number = callLog.length) => Array<Call> {
      // $FlowFixMe
      return callLog.slice(0, maxNum);
    },
  };
}

export default createCallLog;
