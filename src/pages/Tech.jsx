import React, { useEffect } from 'react'
import { Box, Pagination, Stack, Typography } from '@mui/material'
import { fetchData } from '../utils/HttpClient'
import { useState } from 'react'
import TechThree from '../components/3D/TechThree'

const Tech = () => {
    const [tech, setTech] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true)
        const nasaUrl = 'https://api.nasa.gov'

        const techData = await fetchData(`${nasaUrl}/techtransfer/patent/?engine&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
        setTech(techData)
        setLoading(false)
      }
      catch (error) {
        setLoading(false)
        console.error(error);
      }
    }
    fetchApiData()
    }, [])
    const regex = /(<([^>]+)>)/ig;

    if(loading) return 'Loading...'
    return (
    <div className='content'>
      <TechThree />
      <div className="content-wrapper">
      <h1>NASA Tech</h1>
      {Object.values(tech.results).map((item, i) => (
        <div key={i} className="card">
          <h1>{item[1]}</h1>
          <h2>{item[2].replace(regex, '')}</h2>
          <p>{`${item[3].replace(regex, '')}`}</p>
          <h3>{`${item[5].replace(regex, '')}`}</h3>
          <img src={item[10]} alt={item[1]} loading="lazy"/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Tech