import React, { useEffect, useState, useRef} from 'react'
import HttpClient from '../utils/HttpClient'
import Three from '../components/3D/ApodThree'

const Apod = () => {
  const [apod, setApod] = useState({})
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    try{
      setLoading(true)
      HttpClient.getApod().then(apodData => {
          setApod(apodData.data)
        })
      setLoading(false)
      }
      catch (error) {
        setLoading(false)
        console.error(error);
      }
      }, [])
    
  if(loading) return 'Loading...'
  return (
    <div className='content'>
      <div className="content-wrapper">
      {apod && (
        <div className='apod'>
          <p>
            {apod.title} - <i>{apod.date}</i>
          </p>
          <img src={apod.url} alt="APOD" loading="lazy"/>
          <p>{apod.explanation}</p>
        </div>
      )}
      </div>
      <Three />
    </div>
  )
}

export default Apod