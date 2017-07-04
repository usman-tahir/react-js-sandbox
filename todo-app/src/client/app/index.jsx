import React from 'react';
import {render} from 'react-dom';
import Title from './Title.jsx';
// import Todo from './Todo.jsx';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';

window.id = 0;
class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	render() {
		return(
			<div>
				<Title todoCount={this.state.data.length}/>
				<TodoForm addTodo={this.addTodo.bind(this)}/>
				<TodoList todos={this.state.data} remove={this.handleRemove.bind(this)}/>
			</div>
		);
	}

	addTodo(value) {
		const todo = {text: value, id: window.id++};
		this.state.data.push(todo);
		this.setState({data: this.state.data});
	}

	handleRemove(id) {
		const remainder = this.state.data.filter((todo) => {
			if (todo.id !== id) {
				return todo;
			}
		});
		this.setState({data: remainder});
	}

}

render(<TodoApp/>, document.getElementById('app'));
