import { Link } from "react-router-dom";

const Home = () => {
  const sumbinHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.phone.value;
    const data = { name, number };
    console.log(form.radio.value);

    fetch(
      "https://backend-7t42fvx6x-saifuls-projects-92f6e13c.vercel.app/users",
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((data) => data.json())
      .then((res) => {
        e.target.reset();
        console.log(res);
      });
  };
  return (
    <div className="bg-gray-900 border-2 text-white border-red-500 h-screen">
      <Link to={"/users"}>
        <button className="btn btn-success">Users</button>
      </Link>
      <h1 className="text-5xl text-center py-5">input form</h1>

      <form
        onSubmit={sumbinHandle}
        className="bg-gray-300 h-[40vh] text-xl flex flex-col justify-center items-center gap-3"
      >
        <input name="name" type="text" placeholder="your name is here." />
        <input
          name="phone"
          type="number"
          placeholder="your phone number is here."
        />
        <select name="course">
          <option value="js">js</option>
          <option value="html">html</option>
          <option value="css">css</option>
        </select>
        <div className="flex justify-center gap-4  ">
          <label htmlFor="samsung">
            <input id="samsung" type="radio" name="radio" value={"samsung"} />{" "}
            samsung
          </label>
          <label htmlFor="zte">
            <input id="zte" type="radio" name="radio" value={"zte"} /> zte
          </label>
          <label htmlFor="apple">
            <input id="apple" type="radio" name="radio" value={"apple"} /> apple
          </label>
        </div>

        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Home;
