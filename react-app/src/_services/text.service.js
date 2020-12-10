import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

import { Button } from "../components/Button";
import Callout from "../components/Callout";
import OnThisPage from "../components/OnThisPage";

function sanitize(input) {
  return DOMPurify.sanitize(input);
}

function buildHtmlElement(
  { type, className, children, title, href, primary },
  index
) {
  switch (type) {
    case "a-external":
      return (
        <a key={`${type}-${index}`} href={href}>
          {children}
        </a>
      );
    case "a-internal":
      return (
        <Link key={`${type}-${index}`} to={href}>
          {children}
        </Link>
      );
    case "br":
      return <br key={`${type}-${index}`} />;
    case "h1":
      return (
        <h1
          key={`${type}-${index}`}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "h2":
      return (
        <h2
          key={`${type}-${index}`}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "h3":
      return (
        <h3
          key={`${type}-${index}`}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "h4":
      return (
        <h4
          key={`${type}-${index}`}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "h5":
      return (
        <h5
          key={`${type}-${index}`}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "h6":
      return (
        <h6
          key={`${type}-${index}`}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "p":
      return (
        <p
          key={`${type}-${index}`}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "button":
      return (
        <div>
          <Button key={`${type}-${index}`} primary={primary}>
            {children}
          </Button>
        </div>
      );
    case "callout":
      return (
        <div>
          <Callout key={`${type}-${index}`} children={children} />
        </div>
      );
    case "on-this-page":
      return (
        <div>
          <OnThisPage
            key={`${type}-${index}`}
            children={children}
            title={title}
          />
        </div>
      );
    default:
      return null;
  }
}

export const textService = {
  sanitize,
  buildHtmlElement,
};
