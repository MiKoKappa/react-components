import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "English",
    value: "en",
  },
];

const Translate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>
      <Dropdown
        selected={selectedLanguage}
        onSelectedChange={setSelectedLanguage}
        options={options}
        labelText={"Select a Language"}
      />
      <div className="ui divider"></div>
      <h3 className="ui header">Output</h3>
      <Convert language={selectedLanguage} text={text} />
    </div>
  );
};

export default Translate;
