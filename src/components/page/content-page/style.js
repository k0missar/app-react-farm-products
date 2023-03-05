import styled from 'styled-components';
import Title from '../../ui/title/title';
import { Div, Ul, Li } from '../../elements';
import { DefaultTheme } from '../../theme/default-theme';

export const Content = styled(Div)`
    width: 100%;
    padding-bottom: 100px;
`;

export const ContentTitle = styled(Title)`
    margin-bottom: 64px;
    text-align: center;
`;

export const ContentList = styled(Ul)`
    width: 1100px;
    margin: 0 auto 64px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export const ItemHeader = styled(Div)`
    display: flex;
    align-items: center;
    column-gap: 20px;
`;

export const ContentItem = styled(Li)`
    width: 540px;
    padding: 20px;
    ${
        (props) => {
            const color = props.item? DefaultTheme.colorLightGreen : DefaultTheme.colorLightRed;
            return `
                background-color: ${color}
            `;
        }
    }
`;

export const ItemText = styled.p`
    width: max-content;
    margin: 0;
    margin-bottom: 4px;
    padding: 2px 10px;
    background-color: ${DefaultTheme.colorGreen};

    font-family: ${DefaultTheme.fontFamily};
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: ${DefaultTheme.colorWhite};
`;

export const Description = styled.p`
    font-family: ${DefaultTheme.fontFamily};
    ${DefaultTheme.textParagraph['mediumStrong']}
    color: ${DefaultTheme.colorBlackForText};
`;