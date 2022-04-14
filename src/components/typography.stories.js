import React from "react";
import { Typography } from "./typography";

export default {
  component: Typography,
  title: "Typography",
};

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: "h1",
  tagName: "h1",
  className:
    "text-green-700 border-2 shadow-md border-red-700 bg-white p-4 rounded-lg animate-spin-slow",
  children: "Where is my mind?",
};

export const Headline = Template.bind({});
Headline.args = {
  ...Default.args,
};
Headline.args.type = "h2";

export const Headline_2 = Template.bind({});
Headline_2.args = {
  ...Default.args,
};
Headline_2.args.type = "h3";

export const Headline_3 = Template.bind({});
Headline_3.args = {
  ...Default.args,
};
Headline_3.args.type = "h4";

export const Headline_4 = Template.bind({});
Headline_4.args = {
  ...Default.args,
};
Headline_4.args.type = "h5";

export const Headline_5 = Template.bind({});
Headline_5.args = {
  ...Default.args,
};
Headline_5.args.type = "h6";
