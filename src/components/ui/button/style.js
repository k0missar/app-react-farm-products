import styled from 'styled-components';
import { Button as ButtonElements } from '../../elements';
import { DefaultTheme } from '../../theme/default-theme';

export const ButtonBay = styled(ButtonElements)`
    width: 260px;
    height: 60px;
    background-color: ${DefaultTheme.colorOrange};

    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: ${DefaultTheme.colorWhite};

    ${({ position }) => {
        if (position === 'center') {
            return `margin: 0 auto;`;
        } else {
            return `margin-left: auto;`;
        }
    }}

    :hover {
        background-color: #fc7427;
        box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
    }
`;
