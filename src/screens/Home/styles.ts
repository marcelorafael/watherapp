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
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 150px 0 70px 0;
    `};
`;

export const Header = styled.View`
    ${() => css`
        display: flex;
        flex-direction: row;
        margin-top: -100px;

        width: 100%;
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

export const ContainerDays = styled.View`
    ${({ theme, colorTitle }: DefaultTheme) => css`
        display: flex;
        flex-direction: row;

        background-color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
        opacity: 0.7;

        height: 170px;

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

        position: absolute;
        right: 10;
        bottom: 20;
    `};
`;

export const ButtonOpenModal = styled.TouchableOpacity`
    ${() => css`
        position: absolute;
        right: 18px;
        top: 12px;
    `};
`;