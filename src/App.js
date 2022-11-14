import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
