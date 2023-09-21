import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, website} = user;
    return (
        <div className="p-5 border">
            <h3>{name}</h3>
            <p>email: {email}</p>
            <p>website: {website}</p>
            <Link to={`/user/${id}`}><button className="btn btn-primary mt-2">Details</button></Link>
        </div>
    );
};

export default User;