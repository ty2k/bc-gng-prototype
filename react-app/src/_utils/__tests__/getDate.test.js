import getDate from "../getDate";

describe("getDate.iso8601Extended", () => {
  it("returns a date in YYYY-MM-DD format when given a number", () => {
    expect(getDate.iso8601Extended(1545166174000)).toBe("2018-12-18");
  });
  it("returns a date in YYYY-MM-DD format when given a string", () => {
    expect(getDate.iso8601Extended("1619835166000")).toBe("2021-04-30");
  });
  it("returns a date in YYYY-MM-DD format with leading zeros for month and day", () => {
    expect(getDate.iso8601Extended(1622530800000)).toBe("2021-06-01");
  })
});
