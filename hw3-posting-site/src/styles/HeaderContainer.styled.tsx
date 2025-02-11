import styled from "styled-components"
import { ColorTheme } from "../context/themeContext";


export const HeaderContainerStyled = styled('header')<{theme: ColorTheme}>`
    display: flex;
    justify-content: space-between;
    background-color: ${( {theme} ) => theme === 'red' ? "#780000": "#669BBC" };
    color: #FDF0D5;
    text-align: center;
    margin: 20px;
    padding: 20px;
`;