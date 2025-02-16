import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

const CreateCrud = () => {
  // the state for post the data to API
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  // this state for get data from the API
  const [my__data1, setMyData] = useState([]);

  // Navigate with submit , using useNavigate hook from react-router;
  const Navigate = useNavigate();

  // Fetch the data from API when component mount(render)
  useEffect(() => {
    Axios.get("https://677781f180a79bf91901e5fb.mockapi.io/Crud")
      .then((response) => setMyData(response.data))
      .catch((error) => document.write("Refetching Error", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://677781f180a79bf91901e5fb.mockapi.io/Crud", {
      e_name: name,
      e_age: age,
      e_email: email,
    }).then(() => {
      Navigate("/");
    }).catch((err) => {
      console.log(err)
    })
  };

  return (
    <div>
      <div className="container">
        <Row className="d-flex justify-content-center mb-2">
          <Col className="col-md-6 d-flex">
            <Link to={"/"} className="btn btn-primary text-dark fw-bold">
              Read Data
            </Link>
          </Col>
        </Row>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="bg-primary p-2 mb-1 rounded">
              <h1>Create Data</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-2">
                <span className="input-group-text" id="name">
                  @
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="form-control"
                  aria-label="UserName"
                  aria-describedby="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text" id="name">
                  Age
                </span>
                <input
                  type="number"
                  name="age"
                  placeholder="age"
                  className="form-control"
                  aria-label="Email"
                  aria-describedby="name"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text" id="name">
                  Email
                </span>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  aria-label="UserName"
                  aria-describedby="name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCrud;
