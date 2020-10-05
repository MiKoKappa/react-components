import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="ui container">
        <Link className="ui item header" href="/">
          <i class="code icon"></i> Components Training
        </Link>
        <Link href="/acordion" className="item">
          Acordion
        </Link>
        <Link href="/list" className="item">
          Search
        </Link>
        <Link href="/dropdown" className="item">
          Dropdown
        </Link>
        <Link href="/translate" className="item">
          Translate
        </Link>
      </div>
    </div>
  );
};

export default Header;
