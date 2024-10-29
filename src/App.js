import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {RoutesWithHeader} from "./Components/Router/RoutesWithHeader";


function App() {

    const [darkMode, setDarkMode] = useState(false);
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <RoutesWithHeader toggleTheme={toggleTheme}/>
            </Router>
        </ThemeProvider>
    );
}


export default App;
