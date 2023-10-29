 
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

 
const Users = () => {
const[data,setdata]=useState(useLoaderData())
   

    const handleDelet=(id)=>{

        fetch(`https://backend-7t42fvx6x-saifuls-projects-92f6e13c.vercel.app/delete/${id}`,{
            method:"delete",
        })
        .then(res=>res.json())
        .then(datas=>{
            if(datas.deletedCount>0){
                
                setdata(data.filter(item=>item._id!== id))
            }
        })

    }

  
    
    // deletedCount
    return (
        <div>
            <Link to={"/"}><button className="btn btn-warning">Home</button></Link>
            
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Number</th>
        <th>Edit</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    {
        data.map((item,idx)=>{
            return(
                <tr key={item._id}>
                <th>{++idx}</th>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td className="flex justify-center items-center gap-x-2">
                    <Link to={`/edit/${item._id}`}><button className="btn btn-primary">edit</button></Link>
                <button onClick={()=>{handleDelet(item._id)}}  className="btn btn-warning">x</button>
                <Link to={`/single-user/${item._id}`}> <button  className="btn btn-success">view</button></Link>
               
                </td>
                <td>N/A</td>
              </tr>
            )
        })
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;