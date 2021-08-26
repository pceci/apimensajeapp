import React, { useRef, useState, useReducer, useEffect } from 'react';
import NotaLista from './NotaLista'
import { reducerNotas, getNotas } from './utils';



function NotaContenedor(props) {
    let initialState = { l_Notas: [] };
    const [state, dispatch] = useReducer(reducerNotas, initialState);
    useEffect(() => {
        getNotas();
        dispatch({ type: 'all' });
    }, []);
    return (
        <>
            <NotaLista key={state.l_Notas} l_Notas={state.l_Notas}></NotaLista>
        </>
    );
}

export default NotaContenedor;