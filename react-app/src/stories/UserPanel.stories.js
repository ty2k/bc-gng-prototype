import React from "react";

import UserPanel from "../components/UserPanel";

export default {
  title: "Services Page Prototype/UserPanel",
  component: UserPanel,
  argTypes: {
    userSession: { control: "boolean" },
  },
};

const Template = (args) => <UserPanel {...args} />;

export const ActiveUserSession = Template.bind({});
ActiveUserSession.args = {
  userSession: true,
};

export const NoUserSession = Template.bind({});
NoUserSession.args = {
  userSession: false,
};
