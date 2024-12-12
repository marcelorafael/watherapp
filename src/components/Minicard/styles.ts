import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
    ${() => css`
        display: flex;
        justify-content: space-around;

        height: 80px;
    `}
`;