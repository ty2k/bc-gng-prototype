import React from "react";

import Page from "../components/Page";
import * as HeaderStories from "./Header.stories";

export default {
  title: "Services Page Prototype/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const ActiveUserSession = Template.bind({});
ActiveUserSession.args = {
  ...HeaderStories.ActiveUserSession.args,
};

export const NoUserSession = Template.bind({});
NoUserSession.args = {
  ...HeaderStories.NoUserSession.args,
};
