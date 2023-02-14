import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(" https://tecotaskserver.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userData]);

  const submitBtn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;

    const userDB = {
      name: name,
      email: email,
    };

    console.log(userDB);

    fetch(" https://tecotaskserver.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDB),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="App font-mono ">
      <h1 className="text-5xl">Teco Task</h1>
      <div className="w-1/2 mx-auto">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data) => (
                <tr key={data._id} className="active">
                  <th></th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                </tr>
              ))}

              {/* <tr className="active">
        <th></th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
      </tr> */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="">
        <h1 className="text-5xl">Please Input Name and Email</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <form onSubmit={submitBtn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <textarea
                type="textarea"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
              <p className="text-orange-700 p-3"></p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary m-2">Submit</button>
              {/* <button onClick={googleLoginHandler} className="btn btn-info m-2">Google Login</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
