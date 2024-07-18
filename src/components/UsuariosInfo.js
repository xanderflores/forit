import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from 'react-bootstrap/Nav';
import "./UsuariosInfo.css";
/* import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';*/

import ModalNuevoUsuario from "./ModalNuevoUsuario";
import FilterUser from "./FilterUser";
import {  Card, Container, Row } from "react-bootstrap";
const UsuariosInfo = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [usuarios, setUsuarios] = useState([]);
  const [filteredUsuarios, setFilteredUsuarios] = useState([]);
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    const respuesta = await axios.get(url);
    setUsuarios(respuesta.data);
    setFilteredUsuarios(respuesta.data);
  };
  const handleAgregarUsuario = async (nuevoUsuario) => {
    const newId =
      usuarios.length > 0 ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1;
    const updatedUsuarios = [...usuarios, { ...nuevoUsuario, id: newId }];
    setUsuarios([...usuarios, { ...nuevoUsuario, id: newId }]);
    setFilteredUsuarios(updatedUsuarios);
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Container fluid>
      <Row className="row">
        <h1>Busqueda - Usuarios</h1>
      </Row>
      <Nav variant="tabs" className="nav">
        <Nav.Item className="nav-item">
            <Nav.Link className="link" eventKey="link-1"  onClick={handleShow} >Agregar Usuario</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
            <FilterUser
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                usuarios={usuarios}
                setFilteredUsuarios={setFilteredUsuarios}
            />
        </Nav.Item>
    </Nav>
      <Container className="container-cards">
        {filteredUsuarios.map((usuarios, id) => (
          <Card key={usuarios.id} className="card">
            <Card.Header className="card-header">
              <p>Username: {usuarios.username}</p>
            </Card.Header>
            <Card.Body className="card-body">
              <Card.Title>Name: {usuarios.name}</Card.Title>
              <Card.Text className="card-text">
                <h6>Informacion:</h6>
                <br></br>
                <p>Email: {usuarios.email}</p>
                <p>City: {usuarios.address.city}</p>
                <p>Phone: {usuarios.phone}</p>
                <p>Company: {usuarios.company.name}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <ModalNuevoUsuario
        show={show}
        handleClose={handleClose}
        handleAgregarUsuario={handleAgregarUsuario}
      />
    </Container>
  );
};

export default UsuariosInfo;
