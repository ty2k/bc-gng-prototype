import React from "react";

import { Nav } from "./Nav";

export default {
  title: "Services Page Prototype/Nav",
  component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    "Services",
    "Topics",
    "News",
    "Public Engagements",
    "Jobs & MyHR",
    "Get Help",
  ],
};
