import React from 'react'
import loading from './../loading.gif'

const Spinner = () => {

    return (
        <div className='loading-gif-container'>
            <img className='loading-gif' src={loading} alt="" />
        </div>
    )
}

export default Spinner;