/**
 * Return a filtered subset of search results given configuration data for
 * desired time span, desired sort order, desired facet categorization, and the
 * current search tab through which the search was conducted.
 * @param {array} results
 * @param {number} tab
 * @param {string} timeSelectValue
 * @param {array} customDateRange
 * @param {string} sortedBySelectValue
 * @param {string} facetSelectValue
 * @returns {array}
 */
function filterResults (
  results,
  tab,
  timeSelectValue,
  customDateRange,
  sortedBySelectValue,
  facetSelectValue,
) {
  if (sortedBySelectValue === "most-recent") {
    return sortByMostRecent(results)
  }

  return sortByBestMatch(results);
}

// Order results based on the `bestMatchPosition` attribute that we assign in
// Search based on their initial order
function sortByBestMatch(results) {
  return results.sort((a, b) => {
    return a?.bestMatchPosition - b?.bestMatchPosition;
  });
}

// Order results based on their Unix millisecond modification date timestamp
function sortByMostRecent(results) {
  return results.sort((a, b) => {
    const unixMsA = a?.MT?.find(metaTag => metaTag?.$?.N === "datasource/modificationDate")?.$?.V;
    const unixMsB = b?.MT?.find(metaTag => metaTag?.$?.N === "datasource/modificationDate")?.$?.V;
    return unixMsB - unixMsA;
  });
}

export default filterResults;
