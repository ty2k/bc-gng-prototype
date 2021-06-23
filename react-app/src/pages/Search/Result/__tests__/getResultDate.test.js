import TestRenderer from "react-test-renderer";

import getResultDate from "../getResultDate";

import {
  mockResultTab1,
  mockResultTab2,
  mockResultTab3,
  mockResultTab4,
} from "../__mocks__/mockResultData";

describe("getResultDate", () => {
  const dateTab1 = TestRenderer.create(
    getResultDate(mockResultTab1)
  ).toJSON();
  const dateTab2 = TestRenderer.create(
    getResultDate(mockResultTab2)
  ).toJSON();
  const dateTab3 = TestRenderer.create(
    getResultDate(mockResultTab3)
  ).toJSON();
  const dateTab4 = TestRenderer.create(
    getResultDate(mockResultTab4)
  ).toJSON();

  it("renders a Tab 1 (All) date correctly", () => {
    expect(dateTab1).toMatchSnapshot();
  });
  it("renders a Tab 2 (News) date correctly", () => {
    expect(dateTab2).toMatchSnapshot();
  });
  it("renders a Tab 3 (Documents) date correctly", () => {
    expect(dateTab3).toMatchSnapshot();
  });
  it("renders a Tab 4 (Services) date correctly", () => {
    expect(dateTab4).toMatchSnapshot();
  });
})
