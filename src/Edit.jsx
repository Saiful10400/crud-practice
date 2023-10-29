import { useLoaderData } from "react-router-dom";


const Edit = () => {
    const data=useLoaderData()
    console.log(data)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const number=form.phone.value
        const id=data._id
        const datas={name,number,id}
        console.log(datas)

        fetch("https://backend-7t42fvx6x-saifuls-projects-92f6e13c.vercel.app/edit",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(datas)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div><h1 className="text-4xl text-center bg-gray-600 text-white py-5">Updata</h1>
             <form onSubmit={handleSubmit} className="bg-gray-300 h-[40vh] text-xl flex flex-col justify-center items-center gap-3" >
        <input defaultValue={data.name} name="name" type="text" placeholder="your name is here." />
        <input defaultValue={data.number} name="phone" type="number" placeholder="your phone number is here."/>
        <input  type="submit" className="btn btn-primary" />
       </form>
        </div>
    );
};

export default Edit;