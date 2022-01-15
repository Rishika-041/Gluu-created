import React, { Fragment, useState ,useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      setName(name);
      setEmail(email);
    };

    fetchData();
  }, []);

  
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { name,email };
      const response = await fetch(
        "http://localhost:5000/users",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
     
     alert("You are now subscribed to ")
    } catch (err) {
      console.error('onSubmit form error: ', err.message);
    }
  };
   

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className="form-control my-2"
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
    </Fragment>
  );
};

export default Register;