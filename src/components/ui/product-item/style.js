import styled from 'styled-components';
import { Li, Div, H1 } from '../../elements';
import { DefaultTheme } from '../../theme/default-theme';

export const CardItem = styled(Li)`
    width: 727px;
    height: 288px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    background-color: ${DefaultTheme.colorWhite};
`;

export const Img = styled.img`
    width: 248px;
    height: 248px;
    align-items: center;
    object-fit: contain;
`;

export const CardContent = styled(Div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`;

export const CardTitle = styled(H1)`
    font-family: ${DefaultTheme.fontFamily};
    ${DefaultTheme.textTitle.productItem};
    color: ${DefaultTheme.colorBlackForText};
`;

export const CardText = styled.p`
    margin: 0;
    padding: 0;
    font-family: ${DefaultTheme.fontFamily};
    ${DefaultTheme.textParagraph.description};
    color: ${DefaultTheme.colorBlackForText};
    display: ${({ display }) => (display ? 'block' : 'none')};
`;

export const Specifications = styled(Div)`
    font-family: ${DefaultTheme.fontFamily};
    ${DefaultTheme.textParagraph.description};
    color: ${DefaultTheme.colorBlackForText};
    display: ${({ display }) => (display ? 'block' : 'none')};
    p {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
`;

export const Property = styled(Div)`
    font-family: ${DefaultTheme.fontFamily};
    ${DefaultTheme.textParagraph.description};
    color: ${DefaultTheme.colorBlackForText};
    display: ${({ display }) => (display ? 'block' : 'none')};
    p {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
`;

export const CardPrice = styled.p`
    width: max-content;
    margin: 0;
    margin-top: auto;
    padding: 4px 8px;
    font-family: ${DefaultTheme.fontFamily};
    ${DefaultTheme.textParagraph.price};
    color: ${DefaultTheme.colorBlackForText};
    background-color: ${DefaultTheme.colorBlue};
`;
