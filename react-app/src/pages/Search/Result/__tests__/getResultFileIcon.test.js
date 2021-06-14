import TestRenderer from "react-test-renderer";

import getResultFileIcon from "../getResultFileIcon";

import { mockResultPdf, mockResultWord } from "../__mocks__/mockResultData";

describe("getResultFileIcon", () => {
  const fileIconPdf = TestRenderer.create(
    getResultFileIcon(mockResultPdf?.$?.MIME, 1)
  ).toJSON();
  const fileIconWord = TestRenderer.create(
    getResultFileIcon(mockResultWord?.$?.MIME, 1)
  ).toJSON();

  it("renders a PDF icon correctly", () => {
    expect(fileIconPdf).toMatchSnapshot();
  });
  it("renders a Word icon correctly", () => {
    expect(fileIconWord).toMatchSnapshot();
  });
});
