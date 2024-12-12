import { DefaultTheme } from "styled-components";
import styled, { css } from "styled-components/native";

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
        justify-content: space-around;
        /* align-items: center; */
    `};
`;

export const Header = styled.View`
    ${() => css`
        background-color: ${({theme}) => theme.COLORS.TEXT_SECONDARY};
        opacity: 0.6;
    `};
`;

export const Title = styled.Text<TitleTypes>`
    ${({ theme, colorTitle }: DefaultTheme) => css`
        font-size: 25px;
        font-weight: bold;

        text-align: center;

        ${!!colorTitle && titleModifiers[colorTitle](theme)}
    `};
`;

export const Subtitle = styled.Text<TitleTypes>`
    ${({ theme, colorTitle }: DefaultTheme) => css`
        font-size: 18px;

        text-align: center;

        ${!!colorTitle && titleModifiers[colorTitle](theme)}
    `};
`;


export const Temperature = styled.Text<TitleTypes>`
    ${({ theme, colorTitle }: DefaultTheme) => css`
        font-size: 80px;
        font-weight: bold;

        text-align: center;

        ${!!colorTitle && titleModifiers[colorTitle](theme)}
    `};
`;

export const ContainerDays = styled.View`
    ${({ theme, colorTitle }: DefaultTheme) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        ${!!colorTitle && titleModifiers[colorTitle](theme)}
    `};
`;