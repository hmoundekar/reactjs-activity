import React from 'react'
import './UserOutput.css'



const userOutput = (props) => {
  return (
    <div className="">
  <p className="hello"> Hello {props.name}</p>
  <p className="hey"> Hey {props.word}</p>
    </div>
  )
}


export default userOutput;
