var url = 'https://localhost:5001/';// 'https://api.kellerhoff.com.ar/api/';//
var msgNoInternet = 'No hay conexion de internet. Vuelva a intentarlo mas tarde.';
var msgVuelvaIntentarlo = 'Vuelva a intentarlo mas tarde.';
var msgUsuarioContraseñaIncorrectos = 'Usuario y contraseña incorrectos.';

export async function ajaxLogin(pName, pPass) {
    CerrarAlert();
    var data = {};
    data.login = pName;
    data.pass = pPass;
    var json = JSON.stringify(data);
    fetch(getUrl() + 'Auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
        .then(results => results.json())
        .then(data => {
            if (data.token !== null && data.token !== undefined && data.token !== '') {
                localStorage.setItem('login_Token', data.token);
            }
        }).then(data => {
            if (isLoggedIn()) {
                 window.location.reload();
                /*apiSincronizadorAppPostAsync().then(() => {
                    window.location.reload();
                })*/
            } else {
                AbrirAlert(msgUsuarioContraseñaIncorrectos);
                window.location.reload();
            }
        });
}
export function clear_localStorage() {
    localStorage.clear();
}
export function isAlertVisible() {
    var isResult = false;
    var isAlertVisible = localStorage.getItem('isAlertVisible') || '';
    if (isAlertVisible !== null && isAlertVisible !== undefined && isAlertVisible !== '' && (isAlertVisible == 'true')) {
        isResult = true;
    }
    return isResult;
}
export function setAlertVisible(pValue) {
    localStorage.setItem('isAlertVisible', pValue);
}
export function getMsgAlert() {
    var result = '';
    var MsgAlert = localStorage.getItem('MsgAlert') || '';
    if (MsgAlert !== null && MsgAlert !== undefined && MsgAlert !== '') {
        result = MsgAlert;
    }
    return result;
}
export function setMsgAlert(pValue) {
    localStorage.setItem('MsgAlert', pValue);
}
export function AbrirAlert(pValue) {
    setMsgAlert(pValue);
    setAlertVisible(true);
}
export function CerrarAlert() {
    setMsgAlert('');
    setAlertVisible(false);
}
export function getUrl() {
    return url;
}
export function getToken() {
    var token = '';
    var login_Token = localStorage.getItem('login_Token') || '';
    if (login_Token !== null && login_Token !== undefined && login_Token !== '') {
        token = login_Token;
    }
    return token;
}
export function isLoggedIn() {
    var isLogin = false;
    var token = getToken();
    if (token !== null && token !== undefined && token !== '') {
        isLogin = true;
    }
    return isLogin;
}
export function reducerLogin(state, action) {
    switch (action.type) {
        case 'add':
            if (action.token !== null && action.token !== undefined && action.token !== '') {
                localStorage.setItem('login_Token', action.token);
            }
            return { token: action.token };// 'd';//{ token: action.token }
        case 'read':
            return { token: getToken() };
        default:
            throw new Error();
    }
}
export function reducerNotas(state, action) {
    switch (action.type) {
        case 'all':
            var l = [];
            var l_Notas = localStorage.getItem('l_Notas') || '';
            if (l_Notas !== null && l_Notas !== undefined && l_Notas !== '') {
                l_Notas = JSON.parse(l_Notas);
            }
            if (Array.isArray(l_Notas)) {
                l = l_Notas;
            }
            return { l_Notas: l };
        case 'add':
            //{type: 'add', payload: initialCount}
            var dataResult = action.payload.l_Notas;
            if (dataResult !== null && dataResult !== undefined && dataResult !== '' && Array.isArray(dataResult)) {
                localStorage.setItem('l_Notas', JSON.stringify(dataResult));
            }
            return { l_Notas: dataResult };
        default:
            throw new Error();
    }
}
export async function getNotas() {
    CerrarAlert();
    var result = [];
    if (navigator.onLine) {
        try {
            const response = await fetch(getUrl() + 'Notas', {
                method: 'GET',
                headers: { "Authorization": getToken() }
            });
            if (response.status >= 400 && response.status < 600) {
                AbrirAlert(msgNoInternet);
                //window.location.reload();
            } else {
                const reader = response.json();
                /*var dataResult = await reader;
                if (dataResult !== null && dataResult !== undefined && dataResult !== '' && Array.isArray(dataResult)) {
                    result = dataResult;
                    localStorage.setItem('l_Notas', JSON.stringify(dataResult));
                }*/
                //
                var dataResult = await reader;
                reducerNotas('', { type: 'add', payload: { l_Notas: dataResult } });
            }
        } catch {
            AbrirAlert(msgNoInternet);
            //window.location.reload();
        }
    } else {
        AbrirAlert(msgNoInternet);
        //window.location.reload();
    }
    return result;
}