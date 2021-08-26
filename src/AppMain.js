import React, { useReducer } from 'react';
import './App.css';
import { isLoggedIn } from './components/utils';
import Login from './components/Login';
import NotaContenedor from './components/NotaContenedor';
import Header from './components/Header';
import Footer from './components/Footer';


function AppMain() {

    if (!isLoggedIn()) {
        return <Login></Login>;
    }
    return (
        <>
            <Header></Header>
            <main className="container">
                <NotaContenedor></NotaContenedor>

            </main>
            {/*  <Footer></Footer>*/}

        </>
    );
}

export default AppMain;
