import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Todoinput from './Components/todoinput';
import Todoitem from './Components/todoitem';

class App extends Component {
  constructor(props){
    super(props);

      this.state = {
        todos: [
          {id: 0, text: "Make dinner tonight!"},
          {id: 1, text: "Make breakfast Morning."},
          {id: 2, text: "Learn to make a React app!"}
        ],
        nextId: 3
      }

      this.addTodo = this.addTodo.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
}
  // addTodo(todoText){
  //      console.log("Todo added; ",   todoText);
  //   }
  
      addTodo(todoText){
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({
          todos: todos,
          nextId: ++this.state.nextId
        });
      }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !==  id)
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header /> 
          <Todoinput todoText="" addTodo={this.addTodo}/>   
          <ul>
            {
              this.state.todos.map((todo) =>{
                return <Todoitem todo={todo}  key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>

              })
            }
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
