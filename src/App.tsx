import { useState } from 'react';
import TodoTitle from './components/TodoTitle';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoProvider from './context/TodoProvider';

const App = () => {
	const [viewForm, setViewForm] = useState(false);
	return (
		<TodoProvider>
			<section className="todo-container">
				<section className="todo">
					<TodoTitle />
					<TodoList />
				</section>
				<button onClick={() => setViewForm(!viewForm)}>
					add new task
				</button>
				{viewForm ? <TodoForm /> : null}
			</section>
		</TodoProvider>
	);
};

export default App;
