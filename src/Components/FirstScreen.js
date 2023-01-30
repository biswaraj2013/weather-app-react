import React from 'react'
import { useNavigate } from 'react-router-dom'


function FirstScreen() {
  
  const navigate = useNavigate()
  const clicked = ()=>{
    let value = document.getElementById('city').value
    console.log(value)
    navigate('weather-container', {state: {city: value}})
  }

  return (
    <div className='container text-center' style={{ marginTop: '150px', width: '100%', height: '100%' }}>
      <h1 className='my-4' style={{ fontSize: '4rem' }}>Welcome to our Weather App</h1>
      <input className="form-control mx-auto my-4 text-center" id='city' style={{ width: '50%' }} placeholder="Enter your Location" aria-label="Search" />
      <button className="btn btn-warning" onClick={clicked} style={{ width: '20%' }} type="submit">Search</button>
    </div>
  )
}

export default FirstScreen