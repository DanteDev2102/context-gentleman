import { ChangeEvent, useState } from 'react';
import useTodo from '../hooks/useTodo';

const TodoForm = () => {
	const { addTodo } = useTodo();
	const [description, setDescription] = useState('');
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue: string = e.target.value;
		setDescription(newValue);
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
