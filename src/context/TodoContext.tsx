import { createContext } from 'react';
import TodoContextProps from '../types/TodoContextProps';

const TodoContext = createContext<TodoContextProps>(
	{} as TodoContextProps
);

export default TodoContext;
