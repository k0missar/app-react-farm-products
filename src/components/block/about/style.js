import styled from 'styled-components';
import { Div } from '../../elements';
import { DefaultTheme } from '../../theme/default-theme';

export const AboutDiv = styled(Div)`
    width: ${DefaultTheme.width};
    margin: 0 auto;
    margin-bottom: 100px;
    padding: 0 90px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: ${DefaultTheme.colorBlue};
`;

export const AboutInfo = styled(Div)`
    width: 538px;
    padding: 183px 0;
`;

export const Text = styled.p`
    box-sizing: border-box;
    font-family: ${DefaultTheme.fontFamily};
    font-size: ${DefaultTheme.textParagraph['mediumStrong'].fontSize};
    font-weight: ${DefaultTheme.textParagraph['mediumStrong'].fontWeight};
    line-height: ${DefaultTheme.textParagraph['mediumStrong'].lineHeight};
    color: ${DefaultTheme.colorBlackForText};
`;
