import './styles/index.scss';
import {  Link, Route, Routes } from 'react-router-dom';
import { Suspense, useContext, useState } from 'react';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helper/classNames/classNames';



const App = () => {

    const {theme, toggleTheme} = useTheme()
    const bool = true;
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
                <Link to={'/'}>Головна</Link>
                <Link to={'/about'}>Про сайт</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/'} element={<MainPageAsync />} />
                        <Route path={'/about'} element={<AboutPageAsync />} />
                    </Routes>
                </Suspense>
        </div>
    );
};

export default App;