import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

import { imageService } from "./image.service";

import { Accordion, MoreInfo } from "../components/Accordion";
import BackButton from "../components/BackButton";
import BackToTopButton from "../components/BackToTopButton";
import { Button, ButtonLink } from "../components/Button";
import Callout from "../components/Callout";
import CheckboxContent from "../components/CheckboxContent";
import FullWidthBlock from "../components/FullWidthBlock";
import {
  SteppedGuide,
  BackForwardButtonPair,
} from "../components/SteppedGuide";
import Navigation from "../components/Navigation";
import OnThisPage from "../components/OnThisPage";
import RadioButtonGroup from "../components/RadioButtonContent";
import SearchBar from "../components/SearchBar";
import TabbedContent from "../components/TabbedContent";
import TabbedPageNav from "../components/TabbedPageNav";
import TableBasic from "../components/TableBasic";
import TableGroup from "../components/TableGroup";
import Wizard from "../components/Wizard";

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
 *                           or an array or for composed elements
 *                           like `p`, `span`, or React components
 *   - @param {object} data - JSON object data for React components
 *   - @param {object} args - arbitrary arguments for React components
 *   - @param {string} title - title for React components
 *   - @param {string} first - ID of the first step in stepped component
 *   - @param {object} steps - JSON representation of steps in stepped component
 *   - @param {object} callToAction - primary action in a stepped component
 *   - @param {object} defaultContent - show before selection in radio component
 *   - @param {string} placeHolder - placeHolder text for text inputs
 *   - @param {string} href - the `href` of an `a` tag, the `to` of a Link
 *   - @param {Boolean} primary - primary Boolean for Button components
 *   - @param {Boolean} external - Boolean for indicating external links
 * @param {number} index - array index for React keys if applicable
 * @param {number} childIndex - nested array index for React keys if applicable
 */
function buildHtmlElement(
  {
    type,
    id,
    style,
    className,
    children,
    data,
    args,
    title,
    first,
    steps,
    callToAction,
    defaultContent,
    placeHolder,
    href,
    primary,
    external,
  },
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
          {style && style === "strong" && <strong>{sanitize(children)}</strong>}
          {style && style === "em" && <em>{sanitize(children)}</em>}
          {(style && style === "normal") || (!style && sanitize(children))}
        </a>
      );
    case "a-internal":
      return (
        <Link
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          to={href}
        >
          {style && style === "strong" && <strong>{sanitize(children)}</strong>}
          {style && style === "em" && <em>{sanitize(children)}</em>}
          {(style && style === "normal") || (!style && sanitize(children))}
        </Link>
      );
    case "br":
      return <br key={`${type}-${index}-${childIndex ? childIndex : null}`} />;
    case "hr":
      return <hr key={`${type}-${index}-${childIndex ? childIndex : null}`} />;
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
    case "li":
      return (
        <li key={`${type}-${index}`} className={className}>
          {children.map((child, childIndex) => {
            return buildHtmlElement(child, index, childIndex);
          })}
        </li>
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
    case "ol":
      return (
        <ol key={`${type}-${index}`} className={className}>
          {children.map((child, childIndex) => {
            return buildHtmlElement(child, index, childIndex);
          })}
        </ol>
      );
    case "p":
      return (
        <p key={`${type}-${index}-${childIndex}`} className={className}>
          {children.map((child, childIndex) => {
            return buildHtmlElement(child, index, childIndex);
          })}
        </p>
      );
    case "span":
      return (
        <span key={`${type}-${index}`} className={className} id={id}>
          {children.map((child, childIndex) => {
            return buildHtmlElement(child, index, childIndex);
          })}
        </span>
      );
    case "ul":
      return (
        <ul key={`${type}-${index}`} className={className}>
          {children.map((child, childIndex) => {
            return buildHtmlElement(child, index, childIndex);
          })}
        </ul>
      );
    case "accordion":
      return (
        <Accordion
          key={`${type}-${index}${childIndex ? `-${childIndex}` : ""}`}
          className={className}
          id={id}
          title={title}
        >
          {children}
        </Accordion>
      );
    case "back-button":
      return (
        <BackButton
          key={`${type}-${index}${childIndex ? `-${childIndex}` : ""}`}
          children={children}
          id={id}
          primary={primary}
        />
      );
    case "back-forward-button-pair":
      return (
        <BackForwardButtonPair
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          backHref={args.backHref}
          backLabel={args.backLabel}
          forwardHref={args.forwardHref}
          forwardLabel={args.forwardLabel}
        />
      );
    case "back-to-top":
      return (
        <BackToTopButton
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
        />
      );
    case "button":
      return (
        <div key={`${type}-${index}-${childIndex ? childIndex : null}`}>
          <Button key={`${type}-${index}`} primary={primary}>
            {sanitize(children)}
          </Button>
        </div>
      );
    case "button-link":
      return (
        <div key={`${type}-${index}-${childIndex ? childIndex : null}`}>
          <ButtonLink
            key={`${type}-${index}`}
            href={href}
            primary={primary}
            external={external}
          >
            {sanitize(children)}
          </ButtonLink>
        </div>
      );
    case "callout":
      return (
        <Callout
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          className={className}
        >
          {children}
        </Callout>
      );
    case "checkbox-content":
      return (
        <CheckboxContent
          key={`${type}-${index}${childIndex ? `-${childIndex}` : ""}`}
          children={children}
          defaultContent={defaultContent}
          id={id}
          title={title}
        />
      );
    case "full-width-block":
      return (
        <FullWidthBlock
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
        >
          {children}
        </FullWidthBlock>
      );
    case "more-info":
      return (
        <MoreInfo key={`${type}-${index}-${childIndex ? childIndex : null}`}>
          {children}
        </MoreInfo>
      );
    case "navigation":
      return (
        <Navigation
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          sections={children}
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
    case "search-bar":
      return (
        <SearchBar
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          placeHolder={placeHolder || ""}
        />
      );
    case "radio-button-group":
      return (
        <RadioButtonGroup
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          children={children}
          defaultContent={defaultContent}
          id={id}
          title={title}
        />
      );
    case "stepped-guide":
      return (
        <SteppedGuide
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          children={children}
          callToAction={callToAction}
        />
      );
    case "svg":
      const Icon = imageService.getSvg(id);
      if (Icon) {
        return <Icon style={{ ...args }} />;
      }
      return null;
    case "tabbed-content":
      return (
        <TabbedContent
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          children={children}
        />
      );
    case "tabbed-page-nav":
      return (
        <TabbedPageNav
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          children={children}
        />
      );
    case "table-basic":
      return (
        <TableBasic
          key={`${type}-${index}${childIndex ? `-${childIndex}` : ""}`}
          data={data}
          id={id}
        />
      );
    case "table-group":
      return (
        <TableGroup
          key={`${type}-${index}${childIndex ? `-${childIndex}` : ""}`}
          data={data}
          id={id}
        />
      );
    case "wizard":
      return (
        <Wizard
          key={`${type}-${index}-${childIndex ? childIndex : null}`}
          first={first}
          steps={steps}
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
