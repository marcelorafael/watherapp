import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
    ${() => css`
        display: flex;
        align-items: center;
        justify-content: space-around;

        /* border-right-width: 1px;
        border-right-color: white; */

        height: 80px;
    `}
`;