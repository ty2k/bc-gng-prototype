export default function getResultTitle(result, tab) {
  // All (1) or Services (4) tabs
  if (tab === 1 || tab === 4) {
    return (
      <a className="title" href={result?.UE}>
        {result?.T?.toString().split(" - Province of British Columbia", 1)[0]}
      </a>
    );
    // News (2) tab
  } else if (tab === 2) {
    return (
      <a className="title" href={result?.UE}>
        {result?.T?.toString().split(" | BC Gov News", 1)[0]}
      </a>
    );
    // Documents (3) tab and default
  } else {
    return (
      <a className="title" href={result?.UE}>
        {result?.T}
      </a>
    );
  }
}
