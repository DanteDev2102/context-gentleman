import Todo from '../interfaces/Todo';

type TodoAction =
	| { type: 'add'; payload: Todo }
	| { type: 'toggle'; payload: { id: string } };

export default TodoAction;
