import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
    ${() => css`
        flex: 1;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    `};
`;

export const CotainerImageBackground = styled.ImageBackground`
    ${() => css`
        flex: 1;
        justify-content: center;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    `};
`;