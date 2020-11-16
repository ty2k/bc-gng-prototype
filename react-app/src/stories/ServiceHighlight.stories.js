import React from "react";

import { ServiceHighlight } from "../components/ServiceHighlight";

export default {
  title: "Services Page Prototype/ServiceHighlight",
  component: ServiceHighlight,
  argTypes: {
    external: { control: "boolean" },
  },
};

const Template = (args) => <ServiceHighlight {...args} />;

export const InternalLink = Template.bind({});
InternalLink.args = {
  external: false,
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  external: true,
};
