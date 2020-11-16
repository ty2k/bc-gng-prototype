import React, { useEffect, useState } from "react";
import "./Services.scss";

import { Service } from "./components/Service";
import { ServiceHighlight } from "./components/ServiceHighlight";

function Services() {
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
    <div className="div--services-container">
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
            />
          </label>
          <button></button>
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
                key={index && ` - ` && name}
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
              key={index}
              name={name}
              description={description}
              url={url}
              external={external}
              searchTerm={inputValue.toLowerCase()}
            />
          ))}
    </div>
  );
}

export default Services;
