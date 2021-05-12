// Tab reference table:
//
//    Tab Index | Type
//    ---------------------
//    1         | WEB (default)
//    2         | NEWSROOM (BC News)
//    3         | DOCUMENT
//    4         | SERVICES
//    5         | DIRECTORY
//    6         | MAP
//    7         | WEB (Forms)
//    8         | WEB (All)
//
// Tab Index column references the database table, not display order.
// The order of the array below indicates the desired display order of tabs.

const tabMap = [
  {
    id: "all",
    label: "All",
    index: 1,
  },
  {
    id: "services",
    label: "Services",
    index: 4,
  },
  {
    id: "news",
    label: "News",
    index: 2,
  },
  {
    id: "documents",
    label: "Documents",
    index: 3,
  },
];

export default tabMap;
