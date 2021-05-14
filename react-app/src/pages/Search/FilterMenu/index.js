import PropTypes from "prop-types";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import tabMap from "../tabMap";
import Icon from "../../../components/Icon";

const StyledFilterMenu = styled.div`
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin: 22px 0 30px 0;

  button {
    background: none;
    border: none;
    border-bottom: 5px solid transparent;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 16px;
    margin: 0 12px;
    padding: 5px;

    &.active {
      border-bottom: 5px solid #fcba19;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-left: auto;
      margin-right: 0;
    }

    &:focus {
      outline: 4px solid #3b99fc;
      text-decoration: underline;
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      margin: 0 7px;

      /* On mobile, the More Filters button becomes a funnel icon */
      &#more-filters {
        border-bottom: none;
        height: 44px;
        width: 44px;

        svg {
          color: #313132;
          display: inline;
          height: 24px;
          margin: auto;
        }

        &:hover {
          background-color: #dedede;
        }
      }
    }

    @media (max-width: 576px) {
      margin: 0 3px;
      padding: 5px 2px;
    }
  }
`;

function FilterMenu({ parentCallback, tab }) {
  return (
    <StyledFilterMenu>
      {tabMap.map((tabButton, index) => {
        return (
          <button
            key={`filter-menu-button-${index}`}
            id={`filter-button-${tabButton.id}`}
            className={tab === tabButton.index ? "active" : null}
            // onClick={(e) => submitNewQuery(e, tabButton.index)}
            onClick={(e) => parentCallback(e, tabButton.index)}
          >
            {tabButton.label}
          </button>
        );
      })}
      <button id="more-filters" aria-label="More Filters">
        <MediaQuery maxWidth={"768px"}>
          <Icon id={"filter-solid.svg"} />
        </MediaQuery>
        <MediaQuery minWidth={"769px"}>More Filters</MediaQuery>
      </button>
    </StyledFilterMenu>
  );
}

FilterMenu.propTypes = {
  parentCallback: PropTypes.func.isRequired,
  tab: PropTypes.number.isRequired,
};

export default FilterMenu;
