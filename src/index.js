import React from "react";
import { render } from "react-dom";

//begin from here
import BookList from "./a01/booklist";

// here some comments.
import WizardSample from "./c35/App";
import ListSample from "./c31/App";
import { AdvancedTabSelectorSample } from "./c06/AdvancedTabSelector";

//end to here

//belowing is geektime examples
import Hello from "./Hello";

import "antd/dist/antd.css";
import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px"
};

const routeMap = {
  // begin from here
  booklist: BookList,
  "adv-tab-selector": AdvancedTabSelectorSample,
};

class App extends React.PureComponent {
  handleLinkClick = (key) => {
    // window.location.hash = `#${key}`;
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "");

    let CurrentPage = routeMap[currentPage] || Hello;
    if (currentPage.match(/user\/\w+|list-page/)) {
      CurrentPage = ListSample;
    }
    if (currentPage.match(/wizard\/step\/\w+/)) {
      CurrentPage = WizardSample;
    }
    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map((key) => (
            <li
              key={key}
              className={key === currentPage ? "is-active" : ""}
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
