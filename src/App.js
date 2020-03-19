import React, { Component } from 'react';
import Todos from './todos.jsx';
import AddTodos from './addForm.jsx';

class App extends Component {
  state = {
    todos : [ 
      { id:1, content:"Lorem ipsum si Dolores"}, 
      { id:2,content:"Lorem ipsum si Dolores"},
      { id:3, content:"Lorem ipsum si Dolores" } 
    ]
  }
  deleteTodo = (id) => {
    console.log(id)
    const newTodos = this.state.todos.filter(el=>el.id!==id)
    this.setState({todos:newTodos})
  }
  addTodo = todo => {
    todo.id = Math.random()
    this.setState({todos:[...this.state.todos, todo]})
  }
    render (){
      return (
      <div className="App container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodos addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
