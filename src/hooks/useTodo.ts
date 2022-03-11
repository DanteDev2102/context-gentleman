import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const useTodos = () => {
	const { todoState, toggleTodo, addTodo } =
		useContext(TodoContext);
	const { todos } = todoState;

	return {
		todos: todos,
		pendingTodos: todos.filter((todo) => !todo.isCompleted)
			.length,
		toggleTodo,
		addTodo
	};
};

export default useTodos;
