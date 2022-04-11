import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --primary: #645cff;
        --white: #fff;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #f2f4f8;
    }

    .btn{
        background: #645cf6;
        color: #fff;
        border:none;
        border-radius: 0.25rem;
        cursor: pointer;
        text-transform: capitalize;
        padding: 0.25rem;
        display: inline-block;
        width: 200px;
        margin: 1rem auto;
    }
`

export default GlobalStyles