import Icon from "../../../components/Icon";

export default function getResultFileIcon(mimeType) {
  if (mimeType === "application/pdf") {
    return <Icon id={"file-pdf-solid.svg"} />;
  } else if (
    mimeType ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    return <Icon id={"file-word-solid.svg"} />;
  }
  return null;
}
