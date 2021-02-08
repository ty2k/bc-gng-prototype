import React from "react";

import Personalization from "./Personalization";
import Highlights from "./Highlights";
import Topics from "./Topics";
import { personalization, highlights, topics } from "./data.js";

function Home() {
  return (
    <>
      {/* Full width block personalization block */}
      <Personalization personalization={personalization} />

      {/* 4 highlight tiles with larger icons */}
      <Highlights highlights={highlights} />

      {/* 16 Topic tiles */}
      <Topics topics={topics} />

      {/* Work in BC full width block */}

      {/* What's Happening */}

      {/* In the News */}

      {/* Get Involved */}

      {/* Footer */}
    </>
  );
}

export default Home;
