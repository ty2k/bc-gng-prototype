import getDate from "../../../_utils/getDate";

// Return a result's date in YYYY-MM-DD format
export default function getResultDate(result) {
  let date = "";

  // Prefer the <FS name="date" /> node if available
  if (result?.FS?.length > 0) {
    result?.FS?.forEach((detail) => {
      if (detail?.$?.NAME === "date") {
        date = detail?.$?.VALUE;
      }
    })
  }

  // Or try <MT N="DCTERMS.modified" />
  if (!date && result?.MT?.length > 0) {
    result?.MT?.forEach((metaTag) => {
      if (metaTag?.$?.N === "DCTERMS.modified") {
        date = metaTag?.$?.V;
      }
    })
  }

  // Or try <MT N="datasource/modificationDate" />
  if (!date && result?.MT?.length > 0) {
    result?.MT?.forEach((metaTag) => {
      if (metaTag?.$?.N === "datasource/modificationDate") {
        date = getDate.iso8601Extended(parseInt(metaTag?.$?.V));
      }
    })
  }

  // Or try <MT N="mes:date" />
  if (!date && result?.MT?.length > 0) {
    result?.MT?.forEach((metaTag) => {
      if (metaTag?.$?.N === "mes:date") {
        date = getDate.iso8601Extended(parseInt(metaTag?.$?.V));
      }
    })
  }

  if (date) {
    return <p className="date"><strong>Published date:</strong> {date}</p>;
  }

  return null;
}
