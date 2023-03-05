import styled from 'styled-components';
import { Div } from '../../elements';
import { DefaultTheme } from '../../theme/default-theme';

export const Logotype = styled(Div)`
    width: 398px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Text = styled.p`
    font-family: ${DefaultTheme.fontFamily};
    font-weight: 700;
    font-size: 28px;
    line-height: 115%;
    color: ${DefaultTheme.colorBlackForText};
`;