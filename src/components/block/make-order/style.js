import styled from 'styled-components';
import { Div, H1 } from '../../elements';
import { DefaultTheme } from '../../theme/default-theme';

export const MakeOrderContent = styled(Div)`
    width: 100%;
    padding: 20px;
    background-color: ${DefaultTheme.colorWhite};
    font-family: ${DefaultTheme.fontFamily};
    ${DefaultTheme.textParagraph.description}
    color: ${DefaultTheme.colorBlackForText};
`;

export const TotalCost = styled(Div)`
    margin-bottom: 32px;
`;

export const InputAdres = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    margin-top: 24px;
    margin-bottom: 20px;
    padding: 0 12px;
    background-color: ${DefaultTheme.colorSilver};
    ${DefaultTheme.textParagraph.description};
    color: ${DefaultTheme.colorBlackForText};
    border: 1px solid rgba(0, 0, 0, 0.1);
`;
