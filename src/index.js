import React from "react";
import ReactDOM from "react-dom";
import "./style.less"

const App = () => {
  return (
    <div>
      React
      <div className="less">Feature: less</div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
