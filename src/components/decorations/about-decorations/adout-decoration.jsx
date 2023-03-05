import React from 'react';
import styled from 'styled-components';
import frame from '../../../assets/frame.svg';
import { Div } from '../../elements';

const Image = styled(Div)`
    display: flex;
    align-items: flex-end;
`;

function AboutDecorations() {
    return (
        <Image>
            <img src={frame} width="446" height="563" />
        </Image>
    );
}

export default AboutDecorations;
