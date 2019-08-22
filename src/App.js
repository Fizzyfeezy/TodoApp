import React, {Component} from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import Todo from './Todo';
import AddTodo from './AddTodo';
import './app.css'
import * as $ from 'jquery';
import M from 'materialize-css';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos : [
         {id : 1, content : 'Buy some milk'},
         {id : 2, content : 'Play mario cart'}
       ]
    }
  }
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      let options = { inDuration: 300, outDuration: 300, hover: true, coverTrigger: false}
      const elems = document.querySelectorAll('.autocomplete');
      M.Autocomplete.init(elems, options);
    });
    // Or with jQuery
    // $(document).ready(function(){
    //   $('input.autocomplete').autocomplete({
    //     data: {
    //       "Apple": null,
    //       "Microsoft": null,
    //       "Google": 'https://placehold.it/250x250'
    //     },
    //   });
    // });
  }
  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
    console.log(id)
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className = 'center blue-text'>Todo's</h1>
        <Todo todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    )
  } 
}

export default App;
