import styled from "styled-components"
import { ColorTheme } from "../context/themeContext";


export const PageContainerStyled = styled('div')<{theme: ColorTheme}>`
    background-color: #FDF0D5;
    color: #003049;
    text-align: center;
    padding: 20px;
    border-top: ${( {theme} ) => theme === 'red' ? "#780000": "#669BBC" } 5px solid;
`;

export const PageContainerWithOutletsStyled = styled('div')<{theme: ColorTheme}>`
    display: flex;
    gap: 20px;
    background-color: #FDF0D5;
    color: #003049;
    padding: 20px;
    border-top: ${( {theme} ) => theme === 'red' ? "#780000": "#669BBC" } 5px solid;
`;

export const FixContainerStyled = styled('div')`
    max-width: 600px;
    text-align: center;
`;