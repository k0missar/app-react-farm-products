import styled from 'styled-components';
import { Div } from '../../elements';
import { DefaultTheme } from '../../theme/default-theme';
import svg from '../../../assets/vector.svg'

export const FilterPoint = styled(Div)`
    position: relative;
    label {
        padding: 16px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: ${DefaultTheme.fontFamily};
        ${DefaultTheme.textParagraph.mediumStrong};
        color: ${DefaultTheme.colorBlackForText};
        &::after {
            content: '';
            width: 24px;
            height: 24px;
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-color: ${DefaultTheme.colorSilver};
        }
    }
    input {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        white-space: nowrap;
        clip-path: inset(100%);
        clip: rect(0 0 0 0);
        overflow: hidden;
    }
    input[type='checkbox']:checked {
        & + label::after {
            content: '';
            background-color: ${DefaultTheme.colorOrange};
            background-image: url(${svg});
            background-size: 16px 11px;
            background-position: center center;
            background-repeat: no-repeat;
        }
    }
`;

export const FilterLabel = styled.label``;

export const FilterInput = styled.input``;
