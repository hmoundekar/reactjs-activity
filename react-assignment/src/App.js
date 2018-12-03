import React, {
  Component
} from 'react';
import './App.css';
// import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
class App extends Component {
  state = {
    username: [{
        name: "Deadpool"
      },
      {
        name: "Wolverine"
      }
    ]
  }

  switchNameHandler = (event) => {
    this.setState({
      username: [{
          name: "Victor"
        },
        {
          name: event.target.value
        }
      ]
    })
  }

  render() {
    return ( 
      <div className = "App" >
        <UserOutput name = {this.state.username[0].name} word = "Victor"/>
        <UserOutput name = {this.state.username[1].name} word = "Deadpool?"/>
        <UserInput change = {this.switchNameHandler} name = {this.state.username[1].name}/> 
      </div>
    )
  }
}
export default App;