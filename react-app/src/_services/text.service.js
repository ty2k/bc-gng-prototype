import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

import { Button } from "../components/Button";
import Callout from "../components/Callout";
import NumberedPageNav from "../components/NumberedPageNav";
import OnThisPage from "../components/OnThisPage";

function sanitize(input) {
  return DOMPurify.sanitize(input);
}

/**
 * Given a chunk of JSON, build an HTML object
 * @param {object} - JSON chunk
 *   - @param {string} type - type of HTML element or React component
 *   - @param {string} id - element ID, for #hash links
 *   - @param {string} style - visual style for text elements (`strong`, `em`)
 *   - @param {string} className - HTML class
 *   - @param {*} children - a string for primitive elements,
 *                           or an array for composed elements
 *                           like `p`, `span`, or React components
 *   - @param {string} title - title for React components
 *   - @param {string} href - the `href` of an `a` tag, the `to` of a Link
 *   - @param {Boolean} primary - primary Boolean for Button components
 * @param {number} index - array index for React keys if applicable
 * @param {number} childIndex - nested array index for React keys if applicable
 */
function buildHtmlElement(
  { type, id, style, className, children, title, href, primary },
  index = null,
  childIndex = null
) {
  switch (type) {
    case "text":
      switch (style) {
        case "strong":
          return (
            <strong key={`${type}-${index}-${childIndex ? childIndex : null}`}>
              {sanitize(children)}
            </strong>
          );
        case "em":
          return (
            <em key={`${type}-${index}-${childIndex ? childIndex : null}`}>
              {sanitize(children)}
            </em>
          );
        case "normal":
        default:
          return sanitize(children);
      }
    case "a-external":
      return (
        <a
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          href={href}
        >
          {sanitize(children)}
        </a>
      );
    case "a-internal":
      return (
        <Link
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          to={href}
        >
          {sanitize(children)}
        </Link>
      );
    case "br":
      return <br key={`${type}-${index}`} />;
    case "hr":
      return <hr />;
    case "h1":
      return (
        <h1
          key={`${type}-${index}`}
          id={id}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "h2":
      return (
        <h2
          key={`${type}-${index}`}
          id={id}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "h3":
      return (
        <h3
          key={`${type}-${index}`}
          id={id}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "h4":
      return (
        <h4
          key={`${type}-${index}`}
          id={id}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "h5":
      return (
        <h5
          key={`${type}-${index}`}
          id={id}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "h6":
      return (
        <h6
          key={`${type}-${index}`}
          id={id}
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitize(children) }}
        />
      );
    case "p":
      return (
        <p key={`${type}-${index}`} className={className}>
          {children.map((child, childIndex) => {
            return buildHtmlElement(child, index, childIndex);
          })}
        </p>
      );
    case "span":
      return (
        <span key={`${type}-${index}`} className={className}>
          {children.map((child, childIndex) => {
            return buildHtmlElement(child, index, childIndex);
          })}
        </span>
      );
    case "button":
      return (
        <div key={`${type}-${index}-${childIndex ? childIndex : null}`}>
          <Button key={`${type}-${index}`} primary={primary}>
            {sanitize(children)}
          </Button>
        </div>
      );
    case "callout":
      return (
        <Callout key={`${type}-${index}-${childIndex ? childIndex : null}`}>
          {children}
        </Callout>
      );
    case "numbered-page-nav":
      return (
        <NumberedPageNav
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          children={children}
        />
      );
    case "on-this-page":
      return (
        <OnThisPage
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          children={children}
          title={title}
        />
      );
    default:
      return null;
  }
}

export const textService = {
  sanitize,
  buildHtmlElement,
};
