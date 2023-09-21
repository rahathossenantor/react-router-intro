import { useLoaderData, useParams } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    
    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <h2>Datail about {user.name}</h2>
        </div>
    );
};

export default UserDetails;