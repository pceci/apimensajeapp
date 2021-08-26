import React, { useRef, useState, useReducer, useEffect } from 'react';
import { ajaxLogin, reducerLogin, getToken } from './utils';
import StatusContext from './StatusContext';
import Status from './Status';
function Nota(props) {
    const [nota, setNota] = useState({título:'i',contenido:'r'});//props.nota
    const [contenido, setContenido] = useState('');
    const [título, setTítulo] = useState('');
    const [lock, setLock] = useState(false);
    const [status, setStatus] = useState(0);
    useEffect(() => {
        // setContenido()
    }, []);
    function autosave() {
        if (!lock) {
            setLock(true);
            setStatus(1);
            //save();
            //setLock(false);
            setTimeout(() => {
                save();
                setLock(false);
            }, 3000);

        }
    }
    async function save() {
        // api
        setStatus(2);
        setTimeout(() => {
            setStatus(0);
        }, 1000);
        
    }
    function handleOnChangeTítulo(e) {
        e.preventDefault();
        let valueInput = e.target.value;
        //setNota()nota.título = valueInput;
      /*  let jasper = Object.assign({}, nota); 
        jasper.título =  valueInput;  
        setNota(jasper);*/
        //setTítulo(valueInput);

        /*setNota(prevState => {
            let jasper = Object.assign({}, prevState);  // creating copy of state variable jasper
            jasper.título =  valueInput;                     // update the name property, assign a new value                 
            return { jasper };                                 // return new object jasper object
          })*/
          
          /*setNota(prevState => {
            let jasper = Object.assign({}, prevState);  // creating copy of state variable jasper
            jasper.título =  valueInput;                     // update the name property, assign a new value                 
            return { jasper };                                 // return new object jasper object
          })*/
       autosave();
    }
    function handleOnChangeContenido(e) {
        e.preventDefault();
        let valueInput = e.target.value;
       // nota.contenido = valueInput;
       setContenido(valueInput);
      /* setNota(prevState => {
        let jasper = Object.assign({}, prevState);  // creating copy of state variable jasper
        jasper.contenido =  valueInput;                     // update the name property, assign a new value                 
        return { jasper };                                 // return new object jasper object
      })*/
        autosave();
        //    this.setState({value: event.target.value});
    }
    return (
        <>
            <br></br>
            <br></br>
            {/*<div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="button">Grabar</button>
                <button className="btn btn-primary" type="button">Cancelar</button>
    </div>*/}
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Titulo</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" value={nota.título} onChange={handleOnChangeTítulo} ></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Contenido</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={contenido} onChange={handleOnChangeContenido}></textarea>
            </div>
            <Status statusCode={status}></Status>
            {contenido} <br></br>{título}

            <br></br><br></br>
            {nota.título}
        </>
    );
}

export default Nota;