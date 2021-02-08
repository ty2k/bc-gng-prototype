import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import { Service } from "../../components/Service";
import { ServiceHighlight } from "../../components/ServiceHighlight";

const ServicesContentStyled = styled.div`
  div.div--search {
    background-color: #f2f2f2;
    margin: 0 0 20px 0;
    padding: 30px;
  }

  div.div--search h2 {
    margin: 0 0 18px 0;
  }

  div.div--search form {
    background-color: white;
    border: 1px solid #d1d1d1;
    box-sizing: border-box;
    display: inline-block;
    height: 46px;
    width: 100%;
  }

  div.div--search form input {
    border: 0;
    box-sizing: border-box;
    display: inline-block;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 24px;
    height: 44px;
    width: calc(100% - 44px);
    vertical-align: middle;
  }

  div.div--search form button {
    appearance: button;
    -moz-appearance: button;
    -webkit-appearance: button;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC40NzQiIGhlaWdodD0iMTguNDc3IiB2aWV3Qm94PSIwIDAgMTguNDc0IDE4LjQ3NyI+CiAgPHBhdGggaWQ9InNlYXJjaC1taW51cyIgZD0iTTE4LjIyMiwxNy4yLDE3LjIsMTguMjIyYS44NjIuODYyLDAsMCwxLTEuMjIzLDBsLTMuNi0zLjZhLjg2NS44NjUsMCwwLDEtLjI1My0uNjEzdi0uNTg4YTcuNSw3LjUsMCwxLDEsMS4zLTEuM2guNTg4YS44NjUuODY1LDAsMCwxLC42MTMuMjUzbDMuNiwzLjZBLjg3My44NzMsMCwwLDEsMTguMjIyLDE3LjJabS01LjgwOS05LjdhNC45MDcsNC45MDcsMCwxLDAtNC45MDcsNC45MDdBNC45LDQuOSwwLDAsMCwxMi40MTMsNy41MDVaIi8+Cjwvc3ZnPgo=")
      no-repeat;
    background-position: center;
    border: 0;
    box-sizing: border-box;
    display: inline-block;
    height: 44px;
    padding: 0;
    width: 44px;
    vertical-align: middle;
  }

  div.div--service-highlight-container {
    display: block;
    margin: 0 0 20px 0;
  }
  @media (min-width: 576px) {
    div.div--service-highlight-container {
      max-width: 576px;
    }
  }
  @media (min-width: 768px) {
    div.div--service-highlight-container {
      max-width: 768px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
      row-gap: 20px;
    }
  }
  @media (min-width: 992px) {
    div.div--service-highlight-container {
      max-width: 970px;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .text--highlighted {
    background-color: #fcba19;
  }
`;

function ServicesContent() {
  const [services, setServices] = useState({});
  const [inputValue, setInputValue] = useState("");

  async function fetchData() {
    const res = await fetch("/api/services");
    res
      .json()
      .then((res) => setServices(res.services))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <ServicesContentStyled>
      {/* Search bar */}
      <div className="div--search">
        <h2>Find a program or service</h2>
        <form>
          <label>
            <input
              type="text"
              name="search"
              onChange={onChangeHandler}
              value={inputValue}
              autoComplete={"off"}
            />
          </label>
          <button disabled></button>
        </form>
      </div>

      {/* Service highlight cards */}
      <div className="div--service-highlight-container">
        {services &&
          services.length > 0 &&
          services
            .filter(
              (service) =>
                service.highlight === true &&
                service.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map(({ name, url, external, image }, index) => (
              <ServiceHighlight
                key={`service-highlight-${index}`}
                name={name}
                icon={image}
                url={url}
                external={external}
                searchTerm={inputValue.toLowerCase()}
              />
            ))}
      </div>

      {/* Services list */}
      {services &&
        services.length > 0 &&
        services
          .filter(
            (service) =>
              service.name.toLowerCase().includes(inputValue.toLowerCase()) ||
              service.description
                .toLowerCase()
                .includes(inputValue.toLowerCase())
          )
          .map(({ name, description, url, external }, index) => (
            <Service
              key={`service-${index}`}
              name={name}
              description={description}
              url={url}
              external={external}
              searchTerm={inputValue.toLowerCase()}
            />
          ))}
    </ServicesContentStyled>
  );
}

function Services() {
  return <ServicesContent />;
}

Services.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Services.defaultProps = {};

export default Services;
