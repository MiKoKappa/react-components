import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="ui container">
        <Link className="ui item header" href="/react-components/">
          <i class="code icon"></i> Components Training
        </Link>
        <Link href="/react-components/acordion" className="item">
          Acordion
        </Link>
        <Link href="/react-components/list" className="item">
          Search
        </Link>
        <Link href="/react-components/dropdown" className="item">
          Dropdown
        </Link>
        <Link href="/react-components/translate" className="item">
          Translate
        </Link>
      </div>
    </div>
  );
};

export default Header;
