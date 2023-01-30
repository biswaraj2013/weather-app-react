import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorScreen() {
    const navigate = useNavigate()
    return (
        <>
            <div className='container d-flex flex-column justify-center align-items-center' style={{marginTop: '10rem'}}>
                <h1>Sorry! </h1>
                <h3>The location you are requesting does not Exist</h3>
                <button onClick={()=> navigate('/')} className="btn btn-primary">Go to Home</button>
            </div>
        </>
    )
}

export default ErrorScreen