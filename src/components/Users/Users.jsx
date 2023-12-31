import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div className="border grid grid-cols-4 gap-5">
            {users.map(user => <User key={user.id} user={user}></User>)}
        </div>
    );
};

export default Users;