import styled from "styled-components"
import { ColorTheme } from "../context/themeContext";


export const FooterContainerStyled = styled('footer')<{theme: ColorTheme}>`
    background-color: ${( {theme} ) => theme === 'red' ? "#780000": "#669BBC" };
    color: #FDF0D5;
    text-align: center;
    padding: 20px;
`;