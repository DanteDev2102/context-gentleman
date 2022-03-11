import TodoState from '../interfaces/TodoState';
import TodoAction from '../types/TodoAction';

const TodoReducer = (
	state: TodoState,
	action: TodoAction
): TodoState => {
	switch (action.type) {
		case 'add':
			return {
				...state,
				todos: [...state.todos, action.payload]
			};

		case 'toggle':
			return {
				...state,
				todos: state.todos.map(({ ...todo }) => {
					if (todo.id === action.payload.id) {
						todo.isCompleted = !todo.isCompleted;
					}
					return todo;
				})
			};

		default:
			return state;
	}
};

export default TodoReducer;
