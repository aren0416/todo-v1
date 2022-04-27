import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{ box-sizing: border-box;}
    a{ text-decoration: none; color: black;}
    body {
        letter-spacing: -1px;
    }
`;
