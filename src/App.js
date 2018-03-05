import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import Item from './components/Item';


 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     inputValue:"",
     items: [],
     
    };
  }

loadLocalStorage= () => {
  const data = JSON.parse(localStorage.getItem('items'));
  console.log(data);
   if(data){
      this.setState({items: data})
    }
}

  onChangeHandler = (event)=> {
    event.preventDefault();
    const list = event.target.value;
    this.setState( {
      inputValue:list
    } );
  }

  clickHandler = (e) => {
     e.preventDefault();
    this.setState({
      
      items: [...this.state.items, this.state.inputValue ],
      inputValue: ""
    } );
  }

  deleteHandler = (index) => {
    const onDelete = this.state.items; 
    onDelete.splice(index,1);
    this.setState( {
      items:onDelete
    } );
  }

componentWillMount() {
  this.loadLocalStorage();
}

  render() {

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
         <ToDoList inputValue={this.state.inputValue} click={this.clickHandler} change={this.onChangeHandler}/>      
         <Item items={this.state.items} onDelete={this.deleteHandler}/>
         {localStorage.setItem('items', JSON.stringify(this.state.items))}
        </div>
    );
  }
}

export default App; 


