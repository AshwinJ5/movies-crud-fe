import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteAMovieAPI } from '../Services/allAPIs';

function DeleteMovie({movie,getAllMovies}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteAMovieDetail=async(id)=>{
        await deleteAMovieAPI(id)
        getAllMovies()
    }
  return (
    <>
    <div style={{cursor:"pointer"}} onClick={handleShow}><i class="fa-solid fa-ban text-danger me-1"></i>Delete</div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            Are you sure?
          Delete Movie Deatails.
        </Modal.Body>
        <Modal.Footer>
          
          <Button onClick={()=>deleteAMovieDetail(movie._id)} variant="primary">Yes delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteMovie
