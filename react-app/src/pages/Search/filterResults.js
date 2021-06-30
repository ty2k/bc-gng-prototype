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
function filterResults(
  results,
  tab,
  timeSelectValue,
  customDateRange,
  sortedBySelectValue,
  facetSelectValue
) {
  // Order of filtering/sorting operations doesn't matter here,
  // except in terms of time to complete based on current result load.
  const filteredByFacet = filterByFacet(results, tab, facetSelectValue);
  const trimmedByDate = trimByDate(
    filteredByFacet,
    timeSelectValue,
    customDateRange
  );
  return sortResults(trimmedByDate, sortedBySelectValue);
}

/**
 * Returns a subset of results trimmed based on the selected facet/category.
 * Tab number is used to determine which result attribute is used for filtering.
 * `facetSelectValue` is an object with `facet` and `category` key-value pairs.
 * @param {array} results
 * @param {number} tab
 * @param {object} facetSelectValue
 * @returns
 */
function filterByFacet(results, tab, facetSelectValue) {
  // If no facet has been selected, return all results without filtering
  if (!facetSelectValue?.facet) {
    return results;
  }

  // Tab 3 (Documents) has no facet filtering, return all results
  if (tab === 3) {
    return results;
  }

  // If tab = 1, compare `inmeta:level1=` in URL to <MT N="level1" V=""/>
  if (tab === 1) {
    console.log("facetSelectValue: ", facetSelectValue);

    return results.filter((result) => {
      const resultCategory = result?.MT?.find(
        (metaTag) => metaTag?.$?.N === "level1"
      )?.$?.V;

      return resultCategory === facetSelectValue?.category;
    });
  }

  // If tab = 2, compare `inmeta:DCTERMS.creator=` to <MT N="DCTERMS.creator" V=""/>
  if (tab === 2) {
    return results.filter((result) => {
      const resultCategory = result?.MT?.find(
        (metaTag) => metaTag?.$?.N === "DCTERMS.creator"
      )?.$?.V;

      return resultCategory === facetSelectValue?.category;
    });
  }

  // If tab = 4, there are two groups of facets, Subject Category and Subjects.
  // Compare `inmeta:MBCTERMS.subjectCategory` to <MT N="MBCTERMS.subjectCategory" V=""/>
  // Compare `inmeta:DCTERMS.subject` to <MT N="DCTERMS.subject" V=""/>
  if (tab === 4) {
    return results.filter((result) => {
      const subjectCategory = result?.MT?.find(
        (metaTag) => metaTag?.$?.N === "MBCTERMS.subjectCategory"
      )?.$?.V;
      const subject = result?.MT?.find(
        (metaTag) => metaTag?.$?.N === "DCTERMS.subject"
      )?.$?.V;

      if (facetSelectValue?.facet === "Subject Category") {
        return subjectCategory === facetSelectValue?.category;
      }

      if (facetSelectValue?.facet === "Subjects") {
        return subject === facetSelectValue?.category;
      }

      return false;
    });
  }

  // Default case, return results without filtering
  return results;
}

/**
 * Return a sorted array given an array of results and a sort preference string.
 * "best-match" sorts based on the  `bestMatchPosition` attribute that
 * we assign in the Search page based on initial result list from the API.
 * "most-recent" sorts based on the metatag "datasource/modificationDate",
 * a Unix millisecond timestamp indicating when a result was last modified.
 * @param {array} results
 * @param {string} sortedBySelectValue
 * @returns {array}
 */
function sortResults(results, sortedBySelectValue) {
  if (sortedBySelectValue === "best-match") {
    return results.sort((a, b) => {
      return a?.bestMatchPosition - b?.bestMatchPosition;
    });
  }

  if (sortedBySelectValue === "most-recent") {
    return results.sort((a, b) => {
      const unixMsA = a?.MT?.find(
        (metaTag) => metaTag?.$?.N === "datasource/modificationDate"
      )?.$?.V;
      const unixMsB = b?.MT?.find(
        (metaTag) => metaTag?.$?.N === "datasource/modificationDate"
      )?.$?.V;
      return unixMsB - unixMsA;
    });
  }

  return results;
}

/**
 * Returns a subset of results trimmed based on their last modified date using
 * the desired date range.
 * @param {array} results
 * @param {string} timeSelectValue
 * @param {array} customDateRange - pair of Unix millisecond timestamps
 * @returns {array}
 */
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
    const targetStart = new Date(customDateRange[0]).getTime();
    const targetEnd = new Date(customDateRange[1]).getTime();

    return results.filter((result) => {
      const resultDate = result.MT?.find(
        (metaTag) => metaTag?.$?.N === "datasource/modificationDate"
      )?.$?.V;

      return resultDate >= targetStart && resultDate <= targetEnd;
    });
  }
}

export default filterResults;
