import React from 'react';
import './style.css'

function Logo() {
    return (
        <div className='logo'>
            <img src="./assets/farmer-logo.svg" alt="" width={44} height={44} />
            <h1 className='logo__title'>Фермерские продукты</h1>
        </div>
    )
}

export default Logo