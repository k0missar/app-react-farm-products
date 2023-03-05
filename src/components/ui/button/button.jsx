import React from 'react';
import { ButtonBay } from './style'

function Button({position}) {
    return <ButtonBay position={position} onClick={()=>console.log('Купить')}>Купить</ButtonBay>
}

export default Button