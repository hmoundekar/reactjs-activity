import React, { Component } from "react";
import "./ValidationComponent.css";

class ValidationComponent extends Component {
  render() {
    let resultValidation = "The text is too short";
    let highlightResult = "not-valid";

    if (this.props.textLength >= 5) {
      resultValidation = "The text is long enough";
      highlightResult = "valid";
    }

    return (
      <div className="result-validation">
        <p className={highlightResult}>{resultValidation}</p>
      </div>
    );
  }
}

export default ValidationComponent;
