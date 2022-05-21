import React from "react";
import ReactDOM from "react-dom";
import SamurayJsApp from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SamurayJsApp />, div)
  ReactDOM.unmountComponentAtNode(div)
})