/**
 * Given a Unix millisecond timestamp, return an ISO 8601 Extended date
 * in the form (YYYY-MM-DD)
 * @param {number} unixMs
 * @returns String date in the form YYYY-MM-DD
 */
function iso8601Extended(unixMs) {
  const date = new Date(parseInt(unixMs));
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth() is zero-indexed
  const day = date.getDate();

  return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
}

export default { iso8601Extended };
