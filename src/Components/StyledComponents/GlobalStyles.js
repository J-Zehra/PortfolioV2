import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --primary-green: #072227;
        --secondary-green: #35858b;
        --tertiary-green: #4fbdba;
        --light-green: #aefeff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
        list-style: none;
        text-decoration: none;
    }
`