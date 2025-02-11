import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../assets/logo.svg";

export const LogoStyled = styled(LogoSVG)`
    width: 100px;
    height: 100px;
    fill: #FDF0D5;
    
    &:hover {
      fill: #C1121F;
    }
`;