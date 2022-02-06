import React from "react";
import ReactDOM from "react-dom";
import "./tailwindcss.css";
import "./style.less";

const App = () => {
  // eslint-disable-next-line no-undef
  console.log('process.env.TEST ===', process.env.REACT_APP_TEST);
  return (
    <div>
      React
      <div className="less">Feature: less</div>
      <div className="bg-red-900 text-white">tailwind css demo</div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
