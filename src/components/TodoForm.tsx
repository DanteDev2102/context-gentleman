import { ChangeEvent, useState } from 'react';
import useTodo from '../hooks/useTodo';

const TodoForm = () => {
	const { addTodo } = useTodo();
	const [description, setDescription] = useState('');
	const handleChange = (e: any) => {
		setDescription(e.target.value);
	};
	const handleClick = () => {
		addTodo(description);
		setDescription('');
	};
	return (
		<div>
			<label>
				task
				<input
					type="text"
					onChange={handleChange}
					value={description}
				/>
			</label>
			<button onClick={handleClick}>add</button>
		</div>
	);
};

export default TodoForm;
