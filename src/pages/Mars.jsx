import React, { useEffect, useState } from 'react'
import MarsThree from '../components/3D/MarsThree';
import { fetchData } from '../utils/HttpClient';

const Mars = () => {
    const [img, setImg] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true)

        const imgData = await fetchData(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
        setImg(imgData)
        setLoading(false)
      }
      catch (error) {
        setLoading(false)
        console.error(error);
      }
    }
    fetchApiData()
    }, [])

    if(loading) return 'Loading...'
    return (
      <div className='content'>
        <MarsThree />
        <div className="content-wrapper">
        {img.photos.map((item, i) => {
            return (
                <div key={i} className="card">
                    <img style={{width: '30%', position: 'absolute',top: '55%',transform: 'translate(50%, -50%)', height: 'auto'}} src={item.img_src} alt={item.img_src} loading="lazy" />
                    <h1>Camera Name: {item.camera.full_name}</h1>
                    <h2>Rover Name: {item.rover.name}</h2>
                    <h2>Launch Date: {item.rover.launch_date}</h2>
                    <h2>Landing Date: {item.rover.landing_date}</h2>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Mars