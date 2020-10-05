import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is front end javascript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favourite among many programmers!",
  },
  {
    title: "How to use React?",
    content: "You use React by creating components.",
  },
];

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <div className="ui container">
        <Route path="/react-components/">
          <div className="ui hidden divider"></div>
          <h1 className="ui header aligned center icon">
            <i className="circular hand point up icon"></i>
            Click any menu item to check out the coresponding component!
          </h1>
        </Route>
        <Route path="/react-components/acordion">
          <Accordion items={items} />
        </Route>
        <Route path="/react-components/list">
          <Search />
        </Route>
        <Route path="/react-components/dropdown">
          <Dropdown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            labelText={"Select Color"}
          />
        </Route>
        <Route path="/react-components/translate">
          <Translate />
        </Route>
      </div>
    </div>
  );
};
