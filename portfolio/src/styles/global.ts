import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
    --main-color: #1c2580;
    --blue: #2f2feb;
    --blue-dark: #18293c;
    --gold: #825503;
    --green-yellow: #8a9426;
    --blue-cyan: #2c4869;
    --cyan: #598a94;
    --white: #ffffff;
    --white-alpha-40: rgba(255, 255, 255, 0.4);
    --white-alpha-25: rgba(255, 255, 255, 0.25);
    --backdrop-filter-blur: blur(5px);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%; // 15px
        }
        @media(max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }

    body{
        min-height: 100vh;
        background-image: linear-gradient(
            to bottom right,
            var(--blue-cyan),
            var(--cyan)
        );
        /* background-attachment: fixed; */
        font-size: 16px;
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        color: var(--blue-dark);
        line-height: 1.5;
        overflow-x: hidden;
        -webkit-tap-highlight-color: transparent;
        padding: 35px 15px;
    }

    body, input, textarea, button{
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

`