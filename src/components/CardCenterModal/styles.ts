import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
    ${() => css`
        width: 100%;
        /* height: 50px; */

        padding-bottom: 5px;

        border-bottom-width: 1px;
        border-bottom-color: ${({theme}) => theme.COLORS.PRIMARY_700};
    `}
`;

export const MiniContainer = styled.View`
    ${() => css`
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `}
`;

export const TitleModal = styled.Text`
    ${() => css`
        color: ${({ theme }) => theme.COLORS.BACKGROUND};  
    `}
`;