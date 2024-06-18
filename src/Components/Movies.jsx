import React, { useEffect, useState } from 'react'
import { getAllMoviesAPI } from '../Services/allAPIs'
import { Link } from 'react-router-dom'
import EditMovie from './EditMovie'
import NavBar from './NavBar'
import DeleteMovie from './DeleteMovie'

function Movies({search, setSearch}) {
    const[allMovies,setAllMovies]=useState('')

    const getAllMovies= async()=>{
        const result=await getAllMoviesAPI(search)
        setAllMovies(result.data)

    }


    useEffect(()=>{
        getAllMovies()
    },[search])
            // console.log(allMovies);

  return (
    <>
    <NavBar setSearch={setSearch} getAllMovies={getAllMovies} />
    <div className=' px-5'>
      
    <div className="row p-5 text-center">
        {allMovies.length>0?allMovies.map((movie)=>

           
            <div className="card shadow col-lg-3  m-2" style={{width:'20vw'}} key={movie._id}> <Link target='0{' to={`${movie.imdb_url}`}>
  <img src={movie.image} height={280} className="card-img-top " alt="..." />
  <div className="card-body">
    <h4><strong>{movie.movie}</strong></h4>
    <p className="card-text text-dark">
     <strong className='text-warning'>IMDB</strong> Rating: {movie.rating}
    </p>
  </div></Link>
  <div className="d-flex mx-4">
    <DeleteMovie movie={movie} getAllMovies={getAllMovies} />
     
  <EditMovie movie={movie} getAllMovies={getAllMovies}/>
  </div>
 
</div>
        
    ):<p className=' text-danger fw-bolder'>Nothing....</p>}
    </div>
    </div>
    </>
  )
}

export default Movies