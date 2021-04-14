import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
	// useSelector hook to grab the "todos" array from the redux store
	const todos = useSelector((state) => state.todos);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
