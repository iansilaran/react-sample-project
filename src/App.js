import React, { Component } from "react";
import Card from "./Card";

const cardItems = [
  { title: "Title 1", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit consectetur numquam animi? Incidunt recusandae iure voluptatum quis velit quo." },
  { title: "Title 2", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit consectetur numquam animi? Incidunt recusandae iure voluptatum quis velit quo." },
  { title: "Title 3", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit consectetur numquam animi? Incidunt recusandae iure voluptatum quis velit quo." },
  { title: "Title 4", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit consectetur numquam animi? Incidunt recusandae iure voluptatum quis velit quo." },
  { title: "Title 5", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit consectetur numquam animi? Incidunt recusandae iure voluptatum quis velit quo." },
  { title: "Title 6", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit consectetur numquam animi? Incidunt recusandae iure voluptatum quis velit quo." },
  { title: "Title 7", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit consectetur numquam animi? Incidunt recusandae iure voluptatum quis velit quo." },
  { title: "Title 8", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit consectetur numquam animi? Incidunt recusandae iure voluptatum quis velit quo." },
  { title: "Title 9", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit consectetur numquam animi? Incidunt recusandae iure voluptatum quis velit quo." },
]

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: cardItems
    }
  }

  render() {
    const { items } = this.state;
    

    return (
      <div class="container">
        <div className="row mt-5 justify-content-center">
          <Card key={1} title="Hello, React" content="smallest React example" url="./rendering.html" />
          

          {items.map((item, index) => (
            
            <Card key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    )
  }
}

export default App;