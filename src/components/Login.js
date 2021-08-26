import React, { useRef, useState, useReducer, useEffect } from 'react';
import logo from '../logo.svg';
import { ajaxLogin, reducerLogin, getToken } from './utils';

const initialState = { token: 'ojo' };//'d';//{ token: '' };getToken()

/*function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}*/
function Login() {
    const [token, dispatch] = useReducer(reducerLogin, initialState);
    //const [mail, setMail] = useState('');
    //const [pass, setPass] = useState('');
    let inputMail = useRef(null);
    let inputPass = useRef(null);
    useEffect(() => {
        dispatch({ type: 'read' });
    }, []);
    function handleSubmit(event) {
        event.preventDefault();
        //const { name, password } = this.state;
        //ajaxLogin(name, password);
        const mail = inputMail.current.value;
        const pass = inputPass.current.value;
        ajaxLogin(mail, pass);
        //dispatch({ type: 'read' });
        //let history = useHistory();
        // history.push("/laboratorio" );
        //return <Redirect to="/login" />;

    }
    return (
        <div className="App">
            <header className="App-header">
                <form className="form-signin" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Escribia los datos</h1>
                    <label for="inputEmail" className="sr-only">Mail</label>
                    <input ref={inputMail} type="email" id="inputEmail" className="form-control" placeholder="Mail" required="" autofocus=""></input>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input ref={inputPass} type="password" id="inputPassword" className="form-control" placeholder="Password" required="" ></input>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Iniciar sesión</button>
                    <p className="mt-5 mb-3 text-muted">© {(new Date()).getFullYear()}</p>
                </form>
                {token.token}
            </header>

            {/*<footer className="footer">
                <div className="container">
             
                    <span className="text-muted">Versión 1.0 - </span>
                </div>
            </footer>*/}
        </div>
    );
}

export default Login;