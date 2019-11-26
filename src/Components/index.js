import React from "react";
import { render } from "react-dom";

// Function Component
function SampleComponent(props) {
  return <h3>{props.name}</h3>
}

render(
  <SampleComponent />,
  document.getElementById("sample")
)

class Es6Component extends React.Component {

  constructor(props) {
    super(props)
  }
  
  UNSAFE_componentWillMount() {
    console.log("Will Mount")
  }
  componentDidMount() {
    console.log("Did Mount")
  }
  UNSAFE_componentWillReceiveProps() {
    console.log("Will Receive Props")
  }
  UNSAFE_componentWillUpdate() {
    console.log("Will Update")
  }
  componentDidUpdate() {
    console.log("Did Update")
  }
  componentDidCatch() {
    console.log("Did Catch")
  }
  componentWillUnmount() {
    console.log("Will Unmount")
  }

  render() {
    return <h3>Component Lifecycle {this.props.name}</h3>
  }
}

render(
  <Es6Component />,
  document.getElementById("lifecycle")
)