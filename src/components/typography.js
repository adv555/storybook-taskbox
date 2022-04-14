import React from "react";
import { config } from "./config";
import clsx from "clsx";

export const Typography = ({ type, className, tagName, children }) => {
  // const baseStyles =
  //   "text-green-700 border-2 shadow-md border-red-700 bg-white p-4 rounded-lg";

  const Tag = tagName || config[type].defaultTagName;
  const predefinedClassName = config[type].className;

  return <Tag className={clsx(predefinedClassName, className)}>{children}</Tag>;
};
