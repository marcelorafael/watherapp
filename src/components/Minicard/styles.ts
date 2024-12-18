import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
    ${() => css`
        display: flex;
        align-items: center;
        justify-content: space-around;

        height: 80px;
    `}
`;