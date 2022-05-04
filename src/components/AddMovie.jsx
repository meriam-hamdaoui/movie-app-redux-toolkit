import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/movieReducer";

function AddMovie() {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const [inputFields, setInputFields] = useState({
    title: "",
    year: "",
    description: "",
    posterURL: "",
    rating: "",
    trailerURL: "",
  });

  //those are predefined functions cames along with the modal
  //which handls the show close and save buttons
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //we need a function to handle the input fields
  const handleInputs = (e) => {
    //distruct our event objects
    const { name, value } = e.target;
    setInputFields((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const handleClick = () => {
    handleClose();
    dispatch(addMovie(inputFields));
  };

  return (
    <>
      <Button
        style={{
          borderRadius: "25px",
          width: "90%",
          height: "90%",
          margin: "6%",
        }}
        className="movieCard"
        variant="outline-warning"
        onClick={() => handleShow()}
      >
        <span className="addSpan">
          <i className="fa-solid fa-plus"></i>
        </span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                //   value={inputFields.title}
                name="title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Movie release Year</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                // value={inputFields.year}
                name="year"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>URL movie poster</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                // value={inputFields.posterURL}
                name="posterURL"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label rows="3">movie description</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                // value={inputFields.description}
                name="description"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>trailer url</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                // value={inputFields.trailerURL}
                name="trailerURL"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>rating</Form.Label>
              <Form.Control
                onChange={(e) => handleInputs(e)}
                // value={inputFields.rating}
                name="rating"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button onClick={handleClick} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
