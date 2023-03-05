import React from 'react';
import LogoSVG from '../../../assets/farmer-logo.svg';
import {Logotype, Text} from './style';

function Logo() {
    return (
        <Logotype>
            <img src={LogoSVG} alt='Логотип компании' width='44' height='44' />
            <Text>Фермерские продукты</Text>
        </Logotype>
    )
}

export default Logo