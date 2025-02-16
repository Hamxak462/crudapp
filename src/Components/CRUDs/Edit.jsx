import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import { Link } from "react-router";
import { Link, useNavigate } from "react-router";

const Edit = () => {

    const navigate = useNavigate()

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setEmail(localStorage.getItem('email'))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://677781f180a79bf91901e5fb.mockapi.io/Crud/${id}`,{
            e_name : name,
            e_age : age,
            e_email : email
        }).then(()=>{
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }




  return (
    <div>
      <div className="container">
        <Row className="d-flex justify-content-center mb-2">
          <Col className="col-md-6 d-flex">
            <Link to={"/"} className="btn btn-primary text-dark fw-bold">
              Read Data
            </Link>
            <Link to={"/create"} className="btn btn-primary text-dark ms-1 fw-bold py-1">
              Create New Data
            </Link>
          </Col>
        </Row>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 border p-2">
            <div className="bg-primary p-2 mb-1 rounded">
              <h1>Update Data</h1>
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
                  value={name}
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
                  aria-label="age"
                  aria-describedby="age"
                  value={age}
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
                  aria-label="UserEmail"
                  aria-describedby="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <input
                  type="submit"
                  value="Update"
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

export default Edit;
