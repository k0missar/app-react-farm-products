import styled from 'styled-components';
import { H1 as ElementH1 } from '../../elements';
import { DefaultTheme } from '../../theme/default-theme';

const Title = styled(ElementH1)`
    font-family: ${DefaultTheme.fontFamily};
    color: ${DefaultTheme.colorBlackForText};
    ${({ size }) => {
        const theme = DefaultTheme.textTitle[size || 'medium'];
        return `
                font-size: ${theme.fontSize};
                font-weight: ${theme.fontWeight};
                line-height: ${theme.lineHeight};
            `;
    }}
`;

export default Title;
