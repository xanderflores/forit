import React,{useState} from "react";
import { Modal,Button,Form} from "react-bootstrap";
import './ModalNuevoUsuario.css'


const ModalNuevoUsuario = ({ show, handleClose, handleAgregarUsuario }) => {
    const [nuevoUsuario, setNuevoUsuario] = useState({
      name: "",
      username: "",
      email: "",
      address: { city: "" },
      phone: "",
      company: { name: "" },
    });
   

    const handleChange = (e) => {
      const { name, value } = e.target;
      const keys = name.split(".");
      if (keys.length > 1) {
        setNuevoUsuario((prevState) => ({
          ...prevState,
          [keys[0]]: { ...prevState[keys[0]], [keys[1]]: value },
        }));
      } else {
        setNuevoUsuario({ ...nuevoUsuario, [name]: value });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleAgregarUsuario(nuevoUsuario);
      setNuevoUsuario({
        name: "",
        username: "",
        email: "",
        address: { city: "" },
        phone: "",
        company: { name: "" },
      });
      handleClose();
      
    };
    return (
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Agregar Nuevo Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <Form onSubmit={handleSubmit} className="form">
            <Form.Group className="form-group-custom">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={nuevoUsuario.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="form-group-custom ">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={nuevoUsuario.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="form-group-custom ">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={nuevoUsuario.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="form-group-custom ">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="address.city"
                value={nuevoUsuario.address.city}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="form-group-custom ">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={nuevoUsuario.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="form-group-custom ">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                name="company.name"
                value={nuevoUsuario.company.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Button type="submit"  className="button-custom " style={{ backgroundColor: 'transparent', border: '1px solid #ccc', color: '#000' }}>
              Agregar Usuario
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };
  
  export default ModalNuevoUsuario;