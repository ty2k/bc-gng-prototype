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
  const trimmedByDate = trimByDate(results, timeSelectValue, customDateRange);

  if (sortedBySelectValue === "most-recent") {
    return sortByMostRecent(trimmedByDate);
  }

  return sortByBestMatch(trimmedByDate);
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

function trimByDate(results, timeSelectValue, customDateRange) {
  if (timeSelectValue === "anytime") {
    return results;
  }

  if (timeSelectValue === "today") {
    const twentyFourHoursAgo = new Date().getTime() - 24 * 60 * 60 * 1000;

    return results.filter((result) => {
      const resultDate = result.MT?.find(
        (metaTag) => metaTag?.$?.N === "datasource/modificationDate"
      )?.$?.V;

      return resultDate >= twentyFourHoursAgo;
    });
  }

  if (timeSelectValue === "past-7-days") {
    const sevenDaysAgo = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;

    return results.filter((result) => {
      const resultDate = result.MT?.find(
        (metaTag) => metaTag?.$?.N === "datasource/modificationDate"
      )?.$?.V;

      return resultDate >= sevenDaysAgo;
    });
  }

  if (timeSelectValue === "past-30-days") {
    const thirtyDaysAgo = new Date().getTime() - 30 * 24 * 60 * 60 * 1000;

    return results.filter((result) => {
      const resultDate = result.MT?.find(
        (metaTag) => metaTag?.$?.N === "datasource/modificationDate"
      )?.$?.V;

      return resultDate >= thirtyDaysAgo;
    });
  }

  if (timeSelectValue === "past-90-days") {
    const ninetyDaysAgo = new Date().getTime() - 90 * 24 * 60 * 60 * 1000;

    return results.filter((result) => {
      const resultDate = result.MT?.find(
        (metaTag) => metaTag?.$?.N === "datasource/modificationDate"
      )?.$?.V;

      return resultDate >= ninetyDaysAgo;
    });
  }

  if (timeSelectValue === "custom-range") {
    console.log("customDateRange[0]: ", customDateRange[0]);
    console.log("customDateRange[1]: ", customDateRange[1]);

    const targetStart = new Date(customDateRange[0]).getTime();
    const targetEnd = new Date(customDateRange[1]).getTime();

    console.log("targetStart: ", targetStart);
    console.log("targetEnd: ", targetEnd);

    return results.filter((result) => {
      const resultDate = result.MT?.find(
        (metaTag) => metaTag?.$?.N === "datasource/modificationDate"
      )?.$?.V;

      return resultDate >= targetStart && resultDate <= targetEnd;
    });
  }
}

export default filterResults;
