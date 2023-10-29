import { useLoaderData } from "react-router-dom";


const User = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>{data.number}</h1>
            <h1>{data.name}</h1>
            <h1>{data._id}</h1>
        </div>
    );
};

export default User;