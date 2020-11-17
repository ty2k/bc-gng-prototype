import React from "react";

import Header from "../components/Header";
import * as UserPanelStories from "./UserPanel.stories";

export default {
  title: "Services Page Prototype/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const ActiveUserSession = Template.bind({});
ActiveUserSession.args = {
  ...UserPanelStories.ActiveUserSession.args,
};

export const NoUserSession = Template.bind({});
NoUserSession.args = {
  ...UserPanelStories.NoUserSession.args,
};
