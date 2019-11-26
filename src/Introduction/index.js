import React from "react";
import { render } from "react-dom";

const name = "React";
const elem = <h1>Hello, {name}</h1>

render(
  elem,
  document.getElementById("div1")
)

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Gian Carlo',
  lastName: 'Silaran'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

render(
  element,
  document.getElementById('div2')
);