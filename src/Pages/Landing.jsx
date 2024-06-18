import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Movies from '../Components/Movies'
import Footers from '../Components/Footers'

function Landing() {
    const[search,setSearch]=useState("")
  return (
    <>
        <Movies search={search} setSearch={setSearch}/>
        <Footers/>
    </>
  )
}

export default Landing