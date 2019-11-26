import React from "react";
import PropTypes from "prop-types";
import "./card.css"

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }

  render() {
    const { title, content, url } = this.props;
    return (
      <div className="card custom-card mx-2 mb-3" style={{ width: "18rem" }}>
        <img src="https://dummyimage.com/250/efefef/000000" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href={url} className="btn btn-primary">Navigate</a>
        </div>
      </div>
    )
  }
}

export default Card;