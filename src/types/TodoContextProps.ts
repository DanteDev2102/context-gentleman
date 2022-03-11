import TodoState from '../interfaces/TodoState';

type TodoContextProps = {
	todoState: TodoState;
	toggleTodo: (id: string) => void;
	addTodo: (description: string) => void;
};

export default TodoContextProps;
