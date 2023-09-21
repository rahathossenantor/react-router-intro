import { useNavigate } from "react-router-dom";

const Todo = ({todo}) => {
    const {id, title, completed} = todo;
    const navigate = useNavigate();
    const seeDetails = () => {
        navigate(`/todos/${id}`)
    }
    return (
        <div className="p-5 border">
            <h2>Title: {title}</h2>
            <h3>Todo no: {id}</h3>
            <p>{completed ? "Completed" : "Incomplete"}</p>
            <button onClick={seeDetails} className="btn btn-secondary mt-2">Details</button>
        </div>
    );
};

export default Todo;