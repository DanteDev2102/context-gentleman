import { useReducer } from 'react';

import TodoContext from './TodoContext';
import TodoState from '../interfaces/TodoState';
import TodoReducer from '../reducer/TodoReducer';

const initialState: TodoState = {
	todos: [
		{
			id: '1',
			description: 'Vergear a Vergil',
			isCompleted: false
		},
		{
			id: '2',
			description: 'No dejar que lady me robe',
			isCompleted: false
		}
	],
	pending: 2
};

interface props {
	children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({ children }: props) => {
	const [todoState, dispatch] = useReducer(
		TodoReducer,
		initialState
	);

	const toggleTodo = (id: string) => {
		dispatch({ type: 'toggle', payload: { id } });
	};

	const addTodo = (description: string) => {
		dispatch({
			type: 'add',
			payload: {
				id: (todoState.todos.length + 1).toString(),
				description,
				isCompleted: false
			}
		});
	};

	return (
		<TodoContext.Provider
			value={{
				todoState,
				toggleTodo,
				addTodo
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;
