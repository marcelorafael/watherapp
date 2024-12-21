import { DefaultTheme } from "styled-components";
import styled, { css } from "styled-components/native";
import fontMap from "../../typography/fonts";

import { HomeProps } from ".";

type TitleTypes = Pick<HomeProps, 'colorTitle'>

const titleModifiers = {
    night: (theme: DefaultTheme) => css`
       color: ${theme.COLORS.BACKGROUND};
    `,
    afternoon: (theme: DefaultTheme) => css`
       color: ${theme.COLORS.PRIMARY_700};
    `,
    morning: (theme: DefaultTheme) => css`
       color: ${theme.COLORS.PRIMARY_700};
    `
} as any

export const CotainerImageBackground = styled.ImageBackground`
    ${() => css`
        flex: 1;
        background-color: ${({ theme }) => theme.COLORS.INFO};

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 150px 0 70px 0;
    `};
`;

export const Header = styled.View`
    ${() => css`
        display: flex;
        flex-direction: column;
        margin-top: -100px;

        width: 100%;

        padding: 20px 0 0 20px;
    `};
`;

export const Title = styled.Text<TitleTypes>`
    ${({ theme, colorTitle }: DefaultTheme) => css`
        font-size: 25px;
        font-weight: bold;

        text-align: center;

        color: ${() => theme.COLORS.BACKGROUND};

        ${!!colorTitle && titleModifiers[colorTitle](theme)}
    `};
`;

export const Subtitle = styled.Text<TitleTypes>`
    ${({ theme, colorTitle }: DefaultTheme) => css`
        font-size: 18px;

        text-align: center;

        margin-right: 10px;

        ${!!colorTitle && titleModifiers[colorTitle](theme)}
    `};
`;


export const Temperature = styled.Text<TitleTypes>`
    ${({ theme, colorTitle }: DefaultTheme) => css`
        font-size: 100px;
        font-weight: bold;
        font-family: ${fontMap.ltr.bold};

        text-align: center;

        ${!!colorTitle && titleModifiers[colorTitle](theme)}
    `};
`;

export const ContainerDays = styled.ScrollView.attrs({
    horizontal: true
})`
    ${({ theme, colorTitle }: DefaultTheme) => css`

        background-color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
        opacity: 0.7;

        max-height: 200px;
        width: 90%;

        border-radius: 8px;

        padding: 15px 0 20px 0;

        ${!!colorTitle && titleModifiers[colorTitle](theme)}
    `};
`;

export const Img = styled.Image`
    ${() => css`
        width: 50px;
        height: 50px;
        margin-top: 12px;
        margin-left: 20px;
    `};
`;

export const ContainerCondition = styled.View`
    ${() => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        
    `};
`;

export const ButtonOpenModal = styled.TouchableOpacity`
    ${() => css`
        position: absolute;
        right: 18px;
        top: 30px;
    `};
`;

export const WrapperModal = styled.View`
    ${() => css`
        background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
        opacity: 0.9;

        height: 95%;
        border-radius: 8px;

        align-items: center;
    `}
`;

export const ContainerTopModal = styled.View`
    ${() => css`
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        width: 90%;
        height: 100px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 5px;

        border-radius: 8px;

        margin-top: 15px;
        margin-bottom: 10px;

        elevation: 1;
    `}
`;

export const MiniContainerModal = styled.View`
    ${() => css`
        align-items: center;
    `}
`;

export const CenterViewModal = styled.ScrollView`
    ${() => css`
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        width: 90%;

        border-radius: 8px;

        padding: 0 10px 0 10px;
    `}
`;

export const MiniContainerCenterViewModal = styled.View`
    ${() => css`
        border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
        border-bottom-width: 0.5px;
        width: 100%;

        padding: 5px;
    `}
`;


export const OtherImg = styled.Image`
    ${() => css`
        width: 50px;
        height: 50px;
    `};
`;

export const TitleModal = styled.Text`
    ${() => css`
        color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};  
    `}
`;