import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Sagoe UI',
                     Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                     'Helvetica Neue', sans-serif;
    }
`

export default GlobalStyles
