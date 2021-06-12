import TestRenderer from "react-test-renderer";

import getResultDescription from "../getResultDescription";

import {
  mockResultTab1,
  mockResultTab2,
  mockResultTab3,
  mockResultTab4,
} from "../__mocks__/mockResultData";

describe("getResultDescription", () => {
  const descriptionTab1 = TestRenderer.create(
    getResultDescription(mockResultTab1, 1)
  ).toJSON();
  const descriptionTab2 = TestRenderer.create(
    getResultDescription(mockResultTab2, 2)
  ).toJSON();
  const descriptionTab3 = TestRenderer.create(
    getResultDescription(mockResultTab3, 3)
  ).toJSON();
  const descriptionTab4 = TestRenderer.create(
    getResultDescription(mockResultTab4, 4)
  ).toJSON();

  it("renders a Tab 1 (All) description correctly", () => {
    expect(descriptionTab1).toMatchSnapshot();
  });
  it("renders a Tab 2 (News) description correctly", () => {
    expect(descriptionTab2).toMatchSnapshot();
  });
  it("renders a Tab 3 (Documents) description correctly", () => {
    expect(descriptionTab3).toMatchSnapshot();
  });
  it("renders a Tab 4 (Services) description correctly", () => {
    expect(descriptionTab4).toMatchSnapshot();
  });
});
