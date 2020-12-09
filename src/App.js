
import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';
import {v4 as uuid} from 'uuid';  

 class App extends Component {
  state = {
    todos: [
      {
        id : uuid(),
        title : 'Take out the Trash',
        completed : false
      },
      {
        id : uuid(),
        title : 'Doing Coding Work',
        completed : true
      },
      {
        id : uuid(),
        title : 'Meeting with Manager',
        completed : false
      }
      
    ]
  }

  //toggle complete
  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id===id)
      todo.completed = !todo.completed
      return todo;
    }) });
  }

  //delete task
   delTodo = (id) =>{
     this.setState({todos : [...this.state.todos.filter(
       todo => todo.id !== id
     )] }); 
   }

   // add Todo
   addTodo = (title) =>{
     const newTodo = {
       id : uuid(),
       title,
       completed : false,
     }
      this.setState({todos : [...this.state.todos, newTodo]

      })
   }

  render() {
    console.log(this.state.todos);
  return (
    <div className="App">
      <div className="container">
      <Header/>
      <Addtodo addTodo = {this.addTodo}/>
      <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
      </div>
    
    </div>
  );
  }
}

export default App;
