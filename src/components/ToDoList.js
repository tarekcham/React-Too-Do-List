import React from 'react';

 const ToDoList =(props) => {
		return (

			<form onSubmit={props.click}>
				<input type="text" onChange={props.change} value={props.inputValue}/>
				<button> Add Task</button>
				<div>{props.value}</div>
				<div> {props.item}</div>
		  </form>

		);
	};

export default ToDoList;
