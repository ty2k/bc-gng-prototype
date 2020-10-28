import React from "react";

import { Service } from "./Service";

export default {
  title: "Services Page Prototype/Service",
  component: Service,
  argTypes: {
    external: { control: "boolean" },
  },
};

const Template = (args) => <Service {...args} />;

export const InternalLink = Template.bind({});
InternalLink.args = {
  external: false,
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  external: true,
};
