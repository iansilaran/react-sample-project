import React from "react";
import { render } from "react-dom";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ count: count + 1 })}>Click Me!</button>
        <h3>{count}</h3>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById("app")
)