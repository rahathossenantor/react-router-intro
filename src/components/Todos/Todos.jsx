import { useLoaderData } from "react-router-dom";
import Todo from "../Todo/Todo";

const Todos = () => {
    const todos = useLoaderData();
    return (
        <div className="grid grid-cols-4 gap-5">
            {todos.slice(0, 20).map(todo => <Todo key={todo.id} todo={todo}></Todo>)}
        </div>
    );
};

export default Todos;