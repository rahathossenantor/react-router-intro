import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const {statusText} = useRouteError();
    console.log(statusText);
    
    return (
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold">404. Page not found!</h1>
        </div>
    );
};

export default NotFound;