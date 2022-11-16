import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
const items = [
  {
    title: "whats is React ?",
    content: "React is a front end javascript framework",
  },
  {
    title: " React ?",
    content: "React is a framework",
  },
  {
    title: "whats is ?",
    content: " is a front end framework",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "The Color Blue",
    value: "Blue",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
