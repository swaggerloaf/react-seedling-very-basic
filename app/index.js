import * as React from "react";
import ReactDom from "react-dom";
import * as styles from "./styles";

ReactDom.render(
  <div style={{ color: "red" }}>Wow</div>,
  document.getElementById("mountNode")
);
