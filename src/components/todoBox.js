import React from 'react';

const todoBox = (props) => {
  if(props.changeMe === 'done'){
    return (
      <div className="boxDone">
        <span className="hide" onClick={props.green}>✔</span>
        <span className="delete" onClick={props.remove}>✖</span>
        <p className="wrap">{props.todo}</p>
      </div>
    )
  }else {
     return (
      <div className="box">
        <span className="complete" onClick={props.green}>✔</span>
        <span className="delete" onClick={props.remove}>✖</span>
        <p className="wrap">{props.todo}</p>
      </div>
    )
  }
}


export default todoBox;