import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { updateAMovieAPI } from '../Services/allAPIs';


function EditMovie({movie,getAllMovies}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movieDetails,setMovieDetails]=useState({
        id:movie.id,
        movie:movie.movie,
        rating:movie.rating,
        image:movie.image,
        imdb_url:movie.imdb_url
    })

    const handleUpdate=async()=>{

        const{id,movie,rating,image,imdb_url}=movieDetails
             if(!id||!movie||!rating||!image||!imdb_url) {
               alert("Please fill missing data")
             } else {
               const reqBody=new FormData()
               reqBody.append("id",id)
               reqBody.append("movie",movie)
               reqBody.append("rating",rating)
               reqBody.append("image",image)
               reqBody.append("imdb_url",imdb_url)
               

               
                 try {
                   const result=await updateAMovieAPI(id,reqBody)
                   console.log(result);
                   if(result.status===200){
                     handleClose()
                     getAllMovies()
                   }
                   alert(result.response.data)
                 } catch (err) {
                   console.log(err);
                 }
               }
             
       }

       
           
  

  return (
    <>
         <div style={{cursor:"pointer"}} onClick={handleShow} className='ms-auto'><i class="fa-solid fa-square-pen text-success me-1"></i>Edit</div>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <FloatingLabel  label="ID"  className='my-3'>
        <Form.Control type="number" value={movieDetails.id} placeholder="ID" className='my-3' onChange={(e)=>setMovieDetails({...movieDetails,id:e.target.value})}  />
      </FloatingLabel>
        <FloatingLabel  label="Movie Name"  className='my-3'>
        <Form.Control type="text" placeholder="ID"  value={movieDetails.movie}  onChange={(e)=>setMovieDetails({...movieDetails,movie:e.target.value})} />
      </FloatingLabel>
        <FloatingLabel  label="IMDB Rating" className='my-3'>
        <Form.Control type="text" placeholder="IMDB Rating" value={movieDetails.rating}  onChange={(e)=>setMovieDetails({...movieDetails,rating:e.target.value})} />
      </FloatingLabel>
        <FloatingLabel  label="Movie Image Link" className='my-3'>
        <Form.Control type="text" placeholder="Image" value={movieDetails.image}  onChange={(e)=>setMovieDetails({...movieDetails,image:e.target.value})} />
      </FloatingLabel>
        <FloatingLabel  label="IMDB url" className='my-3'>
        <Form.Control type="text" placeholder="IMDB url" onChange={(e)=>setMovieDetails({...movieDetails,imdb_url:e.target.value})} value={movieDetails.imdb_url} />
      </FloatingLabel>
        
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditMovie