import createCallLog from "../createCallLog";

it("should add and return a call", () => {
  let callLog = createCallLog((() => 'asdf'));
  callLog.add("INCOMING", "0811122233344");
  let recentList = callLog.getRecent();
  expect(recentList).toBeInstanceOf(Array);
  expect(recentList.length).toEqual(1);
  let recentFiltered = recentList.map(call => {
      let {type, phoneNumber, timestamp} = call;
      return {type, phoneNumber, timestamp};
  });
  expect(recentFiltered[0]).toEqual({
    type: "INCOMING",
    phoneNumber: "0811122233344",
    timestamp: 'asdf',
  });
});
