import styled from 'styled-components';
import { Button as ButtonCard, Div } from '../../elements';
import { DefaultTheme } from '../../theme/default-theme';

export const ButtonList = styled(Div)`
    display: flex;
    column-gap: 8px;
`;

export const Button = styled(ButtonCard)`
    width: max-content;
    padding: 8px 12px;
    font-family: ${DefaultTheme.fontFamily};
    ${DefaultTheme.textParagraph.description};
    color: ${({ active }) =>
        active ?DefaultTheme.colorWhite : DefaultTheme.colorBlackForText};
    background-color: ${({ active }) => (active ? '#88aa4d' : '#f7f7f7')};
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

// '#88aa4d';
