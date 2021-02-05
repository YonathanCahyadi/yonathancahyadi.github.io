import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';


import "./style.css";

const theme = {
    main: "#CD09EB",
    secondary: "#540CF2",
    tertiary: "##0033DB",
    quaternary: "#0CBDF2",
    quinary: "#0CE89F"
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);