import React from "react";
import {useLocation, Link} from "react-router-dom";
import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    IconButton
} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export function MenuComponent({toggleTheme, isDarkMode}) {
    const location = useLocation();

    const pages = [
        {name: "Home", path: "/todo"},
        {name: "About", path: "/about"},
        {name: "Contact", path: "/contact"}
    ];

    return (
        <AppBar position="static" sx={{bgcolor: "#3d0f03"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: "flex", justifyContent: "flex-end"}}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                sx={{
                                    my: 2,
                                    color: "#fffaf2",
                                    display: "block",
                                    mx: 1,
                                    borderBottom: location.pathname === page.path ? "2px solid #ffb575" : "none"
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <IconButton onClick={toggleTheme} color="inherit" sx={{ml: "auto"}}>
                        {isDarkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
