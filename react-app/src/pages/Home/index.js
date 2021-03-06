import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Personalization from "./Personalization";
import Highlights from "./Highlights";
import Topics from "./Topics";
import { personalization, highlights, topics } from "./data.js";

const Section = styled.section`
  @media (max-width: 575px) {
    margin: 10px;
  }
`;

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  // Feature flag to determine whether to show Personalization block.
  // Hide the block in production deployment.
  const FEATURE_SHOW_PERSONALIZATION = window.location.href.includes(
    "bc-gng-prototype"
  )
    ? false
    : true;

  function handleSearchInput(inputValue) {
    setSearchTerm(inputValue);
  }

  return (
    <>
      {/* Meta information */}
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Prototype website for the Government of British Columbia"
        />
      </Helmet>

      {/* Full width block personalization block */}
      {FEATURE_SHOW_PERSONALIZATION && (
        <Personalization
          parentCallback={handleSearchInput}
          personalization={personalization}
          searchTerm={searchTerm}
        />
      )}

      {/* 4 highlight tiles with larger icons */}
      <Highlights highlights={highlights} />

      {/* 16 Topic tiles */}
      <Topics topics={topics} />

      {/* Work in BC full width block */}
      <Section id="work-in-bc">
        <h2>Work in BC</h2>
        <p>Find a Job</p>
        <p>View Current BC Government Jobs</p>
        <p>MyHR</p>
      </Section>
      <br />

      {/* What's Happening */}
      <Section id="whats-happening">
        <h2>What's Happening</h2>
        <p>BC's Economic Recovery Plan</p>
        <p>BC's Response to COVID-19</p>
      </Section>
      <br />

      {/* In the News */}
      <Section id="in-the-news">
        <h2>In the News</h2>
        <p>Daily Update on COVID-19</p>
        <p>More news stories</p>
      </Section>
      <br />

      {/* Get Involved */}
      <Section id="get-involved">
        <h2>Get Involved</h2>
        <p>Recycling Regulations Policy Intentions Paper</p>
        <p>Rural Slaughter Modernization</p>
        <p>View more public engagements</p>
      </Section>
      <br />

      {/* Footer */}
    </>
  );
}

export default Home;
