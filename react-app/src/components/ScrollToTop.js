// By default, react-router does not implement a generic scroll-to-top function
// when moving between pages.
//
// This component will automatically scroll to the top of a new page when the
// location in the URL bar changes.
//
// See: https://reactrouter.com/web/guides/scroll-restoration/scroll-to-top

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
