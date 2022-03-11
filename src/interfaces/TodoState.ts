import Todo from './Todo';

interface TodoState {
	todos: Todo[];
	completed: number;
	pending: number;
}

export default TodoState;
