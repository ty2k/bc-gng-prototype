import PropTypes from "prop-types";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import Icon from "../../../components/Icon";

import tabMap from "./tabMap";

const StyledTabMenu = styled.div`
  position: relative;

  button.tab {
    background: none;
    border: none;
    border-bottom: 5px solid transparent;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 18px;
    height: 44px;
    margin: 0 12px;
    padding: 5px;

    &.active {
      border-bottom: 5px solid #fcba19;
    }

    &:focus {
      outline: 4px solid #3b99fc;
      text-decoration: underline;
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    &#filter-button-filters {
      display: flex;
      flex-direction: row;
      align-items: center;

      svg {
        color: #313132;
        height: 32px;
        margin: 5px 5px 0 5px;
        width: 32px;
      }

      &.active {
        border-color: transparent;
      }
    }

    @media (max-width: 768px) {
      margin: 0 7px;

      /* On mobile, the Filters button becomes a funnel icon */
      &#filter-button-filters {
        border-bottom: 5px solid transparent;
        height: 44px;
        width: 44px;

        svg {
          color: #313132;
          display: inline;
          height: 24px;
          margin: auto;
        }

        &.active {
          border-bottom: 5px solid #fcba19;
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

  div.tabs-menu {
    border-bottom: 1px solid #d6d6d6;
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin: 22px 0 12px 0;

    button.tab {
      // Smaller text for tab buttons on very small devices
      @media (max-width: 575px) {
        font-size: 16px;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-left: auto;
        margin-right: 0;
      }
    }
  }
`;

function TabMenu({ isFilterMenuShown, setIsFilterMenuShown, tab, setTab }) {
  return (
    <StyledTabMenu>
      <div className="tabs-menu">
        {tabMap.map((tabButton, index) => {
          return (
            <button
              key={`filter-menu-button-${index}`}
              id={`filter-button-${tabButton.id}`}
              className={tab === tabButton.index ? "tab active" : "tab"}
              onClick={(e) => setTab(e, tabButton.index)}
            >
              {tabButton.label}
            </button>
          );
        })}
        <button
          id="filter-button-filters"
          aria-label="Filters"
          className={isFilterMenuShown ? "tab active" : "tab"}
          onClick={() => setIsFilterMenuShown(!isFilterMenuShown)}
        >
          <MediaQuery maxWidth={"768px"}>
            <Icon id={"filter-solid.svg"} />
          </MediaQuery>
          <MediaQuery minWidth={"769px"}>
            {isFilterMenuShown && <Icon id={"material-close.svg"} />}
            <span>Filters</span>
          </MediaQuery>
        </button>
      </div>
    </StyledTabMenu>
  );
}

TabMenu.propTypes = {
  isFilterMenuShown: PropTypes.bool.isRequired,
  setIsFilterMenuShown: PropTypes.func.isRequired,
  tab: PropTypes.number.isRequired,
  setTab: PropTypes.func.isRequired,
};

export default TabMenu;
