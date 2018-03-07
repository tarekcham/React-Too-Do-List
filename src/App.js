import React, { Component } from 'react';
import logo from './logo.svg';
import TodoBox from './components/todoBox';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todo:'',
      items:[]
      }
    }

  changeText = (event) => {
    this.setState({
      todo:event.target.value
    })
  }

  loadLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('items'))
    if(data){
      this.setState({items: data})
    }
  }

  removeToDo = (index) => {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({items: items});
  }

  greenToDo = (index) => {
    let items = [...this.state.items];
    items[index][1] = 'done';
    this.setState({items: items});
  }

  sendToDo = () => {
    this.setState( prevState => {return {
      items: [...prevState.items, [prevState.todo,'']],
      todo: '',
    }})
  }
  
  // this will execute before render()
  componentWillMount(){
     this.loadLocalStorage();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My React Todo List</h1>
        </header>
        <div className="App-intro">
        <input type="text" onChange={this.changeText} value={this.state.todo}/>
        <button onClick={this.sendToDo}>Add ToDo</button>
        {this.state.items.map((item, index) => {
          return <TodoBox todo={item[0]} key={index} changeMe={item[1]} green={()=>{this.greenToDo(index)}} remove={()=>{this.removeToDo(index)}}/>
        })}
        </div>
        {localStorage.setItem('items', JSON.stringify(this.state.items))}
      </div>
    );
  }

}

export default App;