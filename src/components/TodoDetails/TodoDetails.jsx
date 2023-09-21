import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const TodoDetails = () => {
    const todo = useLoaderData();
    
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const params = useParams();
    console.log(params);
    
    return (
        <div>
            <h1>{todo.title}</h1>
            <button onClick={goBack} className="btn btn-accent">Go back</button>
        </div>
    );
};

export default TodoDetails;