import TestRenderer from "react-test-renderer";

import getResultTitle from "../getResultTitle";

import {
  mockResultTab1,
  mockResultTab2,
  mockResultTab3,
  mockResultTab4,
} from "../__mocks__/mockResultData";

describe("getResultTitle", () => {
  const titleTab1 = TestRenderer.create(
    getResultTitle(mockResultTab1, 1)
  ).toJSON();
  const titleTab2 = TestRenderer.create(
    getResultTitle(mockResultTab2, 2)
  ).toJSON();
  const titleTab3 = TestRenderer.create(
    getResultTitle(mockResultTab3, 3)
  ).toJSON();
  const titleTab4 = TestRenderer.create(
    getResultTitle(mockResultTab4, 4)
  ).toJSON();

  it("renders a Tab 1 (All) title correctly", () => {
    expect(titleTab1).toMatchSnapshot();
  });
  it("renders a Tab 2 (All) title correctly", () => {
    expect(titleTab2).toMatchSnapshot();
  });
  it("renders a Tab 3 (All) title correctly", () => {
    expect(titleTab3).toMatchSnapshot();
  });
  it("renders a Tab 4 (All) title correctly", () => {
    expect(titleTab4).toMatchSnapshot();
  });
});
