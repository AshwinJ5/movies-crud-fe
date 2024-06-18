import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import AddMovie from './AddMovie';

function NavBar({setSearch,getAllMovies}) {

  return (
    <>
           <MDBNavbar sticky expand='lg' light style={{backgroundColor:"#8B93FF"}} >
      <MDBContainer fluid className='w-75'>
        <MDBNavbarBrand href='' style={{color:"#5755FE"}} className='me-5 fw-bolder'>MOVIE </MDBNavbarBrand>

       

        

          <form className='d-flex w-75 ms-5 justify-content-space-between input-group  me-auto'>
            <input type='search' onChange={e=>setSearch(e.target.value)} className='form-control' placeholder='Search Movie Here' aria-label='Search' />
          </form>
          <div className="d-flex ms-5" >
            <div className="btn text-light rounded-pill px-5" style={{backgroundColor:"#5755FE"}}  >
              <AddMovie getAllMovies={getAllMovies}/>
            </div>
          </div>
      </MDBContainer>
    </MDBNavbar> 
    </>
  )
}

export default NavBar