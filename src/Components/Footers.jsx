import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'

function Footers() {
  return (
    <div> 
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
    <div className='text-center p-3' style={{ backgroundColor: '#8B93FF' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a className='text-dark' href='/'>
        MovieApp.com
      </a>
    </div>
  </MDBFooter>
  </div>
  )
}

export default Footers