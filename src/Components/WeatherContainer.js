import React, { useState} from 'react'


const API_Key = "21f806ac36c24dadad3143027232201"
function WeatherContainer() {
    const [condition, setCondition] = useState(null)
    const [imgUrl, setImgUrl] = useState(null)
    const [city, setCity] = useState(null)
    const [state1, setState1] = useState(null)
    const [region, setRegion] = useState(null)
    const [temp, settemp] = useState(null)
    const [windSpeed, setWindSpeed] = useState(0)
    const [windDirection, setWindDirection] = useState(null)
    const [windTemp, setWindTemp] = useState(0)
    const [humidity, setHumidity] = useState(null)
    const [cloud, setCloud] = useState(null)
    const [Visibility, setVisibility] = useState(null)
    // const [searchedCity, setSearchedCity] = useState(null)

    let value   
    const clicked = ()=>{
        value = document.getElementById('city').value    
        fetchData()
    }
    const fetchData = async () => {
        let url = `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${value}&days=7&aqi=yes&alerts=no`
        let data = await fetch(url)
        let finalData = await data.json()
        // console.log(finalData)
        setImgUrl(finalData.current.condition.icon)
        setCondition(finalData.current.condition.text)
        setCity(finalData.location.name)
        setState1(finalData.location.region)
        setRegion(finalData.location.country)
        settemp(finalData.current.temp_c)
        setWindSpeed(Math.floor(finalData.current.wind_kph))
        setWindDirection(finalData.current.wind_dir)
        setWindTemp(finalData.current.wind_degree)
        setHumidity(finalData.current.humidity)
        setCloud(finalData.current.cloud)
        setVisibility(finalData.current.vis_km)
    }


    return (
        <>
            {/* <div className="search-container">
                <div className='container text-center' style={{ marginTop: '150px', width: '100%', height: '100%' }}>
                    <h1 className='my-4' style={{ fontSize: '4rem' }}>Welcome to our Weather App</h1>
                    <input className="form-control mx-auto my-4 text-center" id='city' style={{ width: '50%' }} placeholder="Enter your Location" aria-label="Search" />
                    <button className="btn btn-warning" onClick={clicked} style={{ width: '20%' }} type="submit">Search</button>
                </div>
            </div> */}


            <div className="weather-container">
                <div className="container rounded d-flex align-items-center justify-content-between p-5 mx-auto" style={{ margin: '150px auto', fontFamily: "'Unbounded', cursive", backgroundColor: 'blueviolet', boxShadow: '0px 0px 111px 6px rgba(102,82,122,1)', height: '24rem' }}>
                    <div className='mx-5'>
                        <h1 style={{ fontSize: '4rem' }}>{city}</h1>
                        <h3> {state1}<br /> {region}</h3>
                    </div>
                    <div>
                        <div className="">
                            <img style={{ width: '150px' }} src={imgUrl} alt="" />
                            <p className='text-center fs-3'>{condition}</p>
                        </div>
                    </div>
                    <div className='mx-5' style={{ fontSize: '5rem' }}>{temp}<sup><strong className='fs-1'>&#8451;</strong></sup>
                    </div>
                </div>
                <div className="container d-flex align-items-center justify-content-center text-dark rounded fs-4 overflow-y-auto" style={{ margin: '100px auto', fontFamily: "'Unbounded', cursive", width: '68rem', height: '20rem', backgroundColor: 'blueviolet', padding: '16px 55px', boxShadow: '0px 0px 111px 6px rgba(102,82,122,1)' }}>
                    <div className="container row my-1">
                        <div className="container row mx-3 my-5">
                            <div className="col-lg-4  text-center">
                                Wind speed
                                <div className="col-lg text-center">{windSpeed}km/h</div>
                            </div>
                            <div className="col-lg-4 text-center">
                                Wind direction
                                <div className="col-lg text-center">{windDirection}</div>
                            </div>
                            <div className="col-lg-4  text-center">
                                Wind temperature
                                <div className="col-lg text-center">{windTemp}<strong className='fs-5'>&#8451;</strong></div>
                            </div>
                        </div>
                        <div className="container row mx-3">
                            <div className="col-lg-4  text-center">
                                Humidity
                                <div className="col text-center">{humidity} %</div>
                            </div>
                            <div className="col-lg-4  text-center">
                                Cloud Cover
                                <div className="col text-center">{cloud} %</div>
                            </div>
                            <div className="col-lg-4  text-center">
                                Visibility
                                <div className="col-lg text-center">{Visibility} km</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherContainer
