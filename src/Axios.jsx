import axios from "axios";

 
const Axios = () => {
    axios.get("https://assignment-10-mu.vercel.app/brand/apple")
    .then(data=>console.log(data)
    )
    return (
        <div>
            hellow saiful.
        </div>
    );
};

export default Axios;