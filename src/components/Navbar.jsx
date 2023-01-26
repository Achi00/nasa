import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

const Navbar = () => {
  return (
    <nav>
        <Link style={{textDecoration: 'none', color: '#f2f2f2'}} to="/" className="logo">
            <h3>Nasa</h3>
        </Link>
        <Stack direction="row" sx={{position: 'relative', left: '0%', transform: { lg: 'translate(50%, -50%)', xs: 'translate(25%, -70%)'}, display: 'flex', gap: { lg: '50px', xs: '15px'}}} className="nav-stack">
            <Link to="/apod" style={{textDecoration: 'none', color: '#f2f2f2'}}>APOD</Link>
            <Link to="/tech" style={{textDecoration: 'none', color: '#f2f2f2'}}>Technology</Link>
            <Link to="/mars" style={{textDecoration: 'none', color: '#f2f2f2'}}>Mars</Link>
        </Stack>
    </nav>
  )
}

export default Navbar