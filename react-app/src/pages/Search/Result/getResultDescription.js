export default function getResultDescription(result, tab) {
  // Documents (3) tab
  if (tab === 3) {
    return (
      <p
        className="description"
        dangerouslySetInnerHTML={{ __html: result?.S?.toString() }}
      />
    );

    // All (1), Services (4), News (2) tabs and default
  } else {
    return (
      <p className="description">
        {result?.MT?.length > 0 &&
          result?.MT?.map((metaTag) => {
            if (metaTag?.$?.N === "description") {
              return metaTag?.$?.V;
            }
            // .map() expects an explicit return value and React will
            // throw a warning if this is not present
            return null;
          })}
      </p>
    );
  }
}
