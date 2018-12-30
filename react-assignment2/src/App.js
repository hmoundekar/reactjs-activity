import React, { Component } from 'react';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import './App.css';

class App extends Component {
  state = {
    text: ""
  };

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });

    console.log(this.state.text);
  };

  removeChar = (char, index) => {
    let textCopy = this.state.text;
    let textArray = textCopy.split("");

    textArray.splice(index, 1);

    this.setState({
      text: textArray.join("")
    });
  }
  render() {
    let chars = this.state.text.split("");

    let CharComponents = chars.map((char, index) => {
      return (
        <CharComponent
          key={index}
          index={index}
          handleClickChar={this.removeChar}
          textContent={char}
        />
      );
    });
    return (
      <div className="App">
        <div>
          <label htmlFor="textInput">
            Enter a text with a minimum length of 5 chars:{" "}
          </label>
          <input id="textInput" onChange={this.handleTextChange} />
        </div>
        <ValidationComponent textLength={this.state.text.length} />
        {CharComponents}
        </div>
    );
  }
}

export default App;
