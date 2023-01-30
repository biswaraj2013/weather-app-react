import React from 'react'
import { useNavigate } from 'react-router-dom'

// const API_Key = "21f806ac36c24dadad3143027232201"
// const verifyCity = () => {
//   let location = document.getElementById('city').value
//   // console.log(location)
//   let url = `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}q=${location}&days=7&aqi=yes&alerts=no`  
//   let data = fetch(url).then((value)=>{
//     console.log("The value: \n"+value)
//   }).catch((error)=>{
//     console.log("The error: \n"+error)
//   })
//     // return <WeatherContainer city={location} />  
// }

function FirstScreen() {

  const navigate = useNavigate()

  return (
    <div className='container text-center' style={{ marginTop: '150px', width: '100%', height: '100%' }}>
      <h1 className='my-4' style={{ fontSize: '4rem' }}>Welcome to our Weather App</h1>
      <input className="form-control mx-auto my-4 text-center" id='city' style={{ width: '50%' }} placeholder="Enter your Location" aria-label="Search" />
      <button className="btn btn-warning" onClick={()=>navigate('weather-container')} style={{ width: '20%' }} type="submit">Search</button>
    </div>
  )
}

export default FirstScreen