import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
    ${() => css`
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    `};
`;