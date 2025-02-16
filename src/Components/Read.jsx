import axios from "axios";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

const Read = () => {
  // Set all API data in this state : 
  const [apiData, setApiData] = useState([]);

  // This function is for to Get data from api and then call this function bellow;
  function getData() {
    Axios.get("https://677781f180a79bf91901e5fb.mockapi.io/Crud")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        setApiData(error);
      });
  }

  //CRUD Delete method : delete something from API:
  const handleClick = (id) => {
    axios.delete(`https://677781f180a79bf91901e5fb.mockapi.io/Crud/${id}`)
    .then(() =>{
      getData();
    }).catch((err) => {
      console.log(err)
    })
  }

  // Get Data from API: 
  useEffect(() => {
    getData();
  }, []);

  const setDataStorage = (id, name , age, email) =>{
    localStorage.setItem('id', id),
    localStorage.setItem('name', name),
    localStorage.setItem('age', age),
    localStorage.setItem('email', email)
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col className="col-md-10 d-flex">
          <Link to={"/create"} className="btn btn-primary">
            Create New Data
          </Link>
        </Col>
      </Row>

      <div className="row d-flex justify-content-center mt-3">
        <div className="col-md-10">
          <table className="table table-bordered table-striped table-dark">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delet</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((items, index) => {
                const { id, e_name, e_age, e_email } = items;
                return (
                  <tr key={index + 1}>
                    <td>{id}</td>
                    <td>{e_name}</td>
                    <td>{e_age}</td>
                    <td>{e_email}</td>
                    <td>
                      <Link to={'/edit'} className="btn btn-primary px-4 fw-bold" onClick={() => setDataStorage(id, e_name, e_age, e_email)}>Edit</Link>
                    </td>
                    <td>
                      <button  className=" btn btn-danger py-1 px-4 rounded border-1" onClick={() => {if(window.confirm("Are You Sure To Delete This Data")){handleClick(id)}}}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Read;
