import styled from 'styled-components';
import { Section, Div, Ul, Li, H1 } from '../../elements'
import { DefaultTheme } from '../../theme/default-theme';

export const SectionPage = styled(Section)`
    background-color: ${DefaultTheme.colorSilver}
`;

export const Content = styled(Div)`
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    column-gap: 20px
`;