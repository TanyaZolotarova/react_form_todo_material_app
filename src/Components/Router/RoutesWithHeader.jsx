import {Route, Routes, useLocation} from "react-router-dom";
import {MenuComponent} from "../UI/MenuComponent";
import {FormLoginComponent} from "../Form/FormLoginComponent";
import {TodoComponent} from "../Todo/TodoComponent";
import {AboutComponent} from "../About/AboutComponent";
import {ContactComponent} from "../Contact/ContactComponent";
import {NotFoundComponent} from "../404/NotFoundComponent";
import React from "react";

export function RoutesWithHeader({toggleTheme}) {
    const location = useLocation();
    const hideHeaderOnLogin = location.pathname === '/';

    return (
        <div className='App'>
            {!hideHeaderOnLogin && <MenuComponent toggleTheme={toggleTheme}/>}
            <Routes>
                <Route path='/' element={<FormLoginComponent/>}/>
                <Route path='/todo' element={<TodoComponent/>}/>
                <Route path='/about' element={<AboutComponent/>}/>
                <Route path='/contact' element={<ContactComponent/>}/>
                <Route path='*' element={<NotFoundComponent/>}/>
            </Routes>
        </div>
    );
}