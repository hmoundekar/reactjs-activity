import React, { Component } from "react";
import "./CharComponent.css";

class CharComponent extends Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.handleClickChar(this.props.textContent, this.props.index);
        }}
        className="char-component"
      >
        {this.props.textContent}
      </div>
    );
  }
}

export default CharComponent;
