import React from 'react';
import './style.css';

import Logo from '../../ui/logo/logo';
import CreateBy from '../../ui/create-by/create-by';
import { Wrapper } from '../../elements';

function Footer() {
    return (
        <div className="footer">
            <Wrapper>
                <div className='footer__content'>
                    <Logo />
                    <CreateBy />
                </div>
            </Wrapper>
        </div>
    );
}

export default Footer;
