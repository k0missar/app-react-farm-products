import React from 'react';
import './style.css';
import Logo from '../../ui/logo/logo';
import Button from '../../ui/button/button';
import { Wrapper } from '../../elements';

function Header() {
    return (
        <div className="header">
            <Wrapper>
                <div className='header__content'>
                    <Logo />
                    <Button />
                </div>
            </Wrapper>
        </div>
    );
}

export default Header;
