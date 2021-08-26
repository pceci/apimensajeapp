import React, { useRef, useState, useReducer, useEffect } from 'react';
import { reducerNotas } from './utils';
import Nota from './Nota';
import Alert from './Alert';


function NotaLista(props) {
    const [l_Notas, setL_Notas] = useState(props.l_Notas);
    const [notaSelect, setNotaSelect] = useState(null);
    const [isDetalleNota , setIsDetalleNota ] = useState(false);
    const handleCerrarDetalleNota = () => {  setIsDetalleNota (false); }
    function onClickSelectNota(e, pNota) {
        //e.preventDefault();
        setNotaSelect(pNota);
        setIsDetalleNota(true);
        //console('ok')
        //e.target.value = '';
        // handleChange(e);
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Título</th>
                        <th scope="col">Contenido</th>

                    </tr>
                </thead>
                <tbody>
                    {l_Notas.map((nota, i) => {
                        return (
                            <>
                                <tr onClick={(e) => onClickSelectNota(e, nota)}>
                                    <th scope="row">{i}</th>
                                    <td>{nota.título}</td>
                                    <td>{nota.contenido}</td>

                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            {(notaSelect && isDetalleNota) && <> <button type="button" class="btn-close float-end" data-bs-dismiss="alert" aria-label="Close" onClick={handleCerrarDetalleNota}></button> <Nota key={notaSelect.notaId} nota={notaSelect}></Nota></>}
        </>
    );
}

export default NotaLista;