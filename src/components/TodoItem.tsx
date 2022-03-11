import Todo from '../interfaces/Todo';
import useTodo from '../hooks/useTodo';

interface props {
	todo: Todo;
}

const TodoItem = ({ todo }: props) => {
	const { toggleTodo } = useTodo();
	const finishTask = () => {
		toggleTodo(todo.id);
	};

	return (
		<section className="todo__element">
			{console.log(todo)}
			<li
				style={{
					textDecoration: todo.isCompleted
						? 'line-through'
						: ''
				}}
			>
				{todo.description}
			</li>
			<button
				className="todo__element-btn"
				onClick={finishTask}
			>
				finish
			</button>
		</section>
	);
};

export default TodoItem;
