import useTodo from '../hooks/useTodo';

const Title = () => {
	const { pendingTodos } = useTodo();

	return <h1 className="todo__title">Pendings: {pendingTodos}</h1>;
};

export default Title;
