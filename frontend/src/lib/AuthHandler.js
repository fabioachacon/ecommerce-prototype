import Cookies from 'js-cookie';

export const isLogged = () => {
    const token = Cookies.get("token");
    return (token) ? true : false;
}

export const getToken = () => {
    const token = Cookies.get('token');
    return token;
}

export const storeCookie = (token, remmenberPassword = false ) => {
    if (remmenberPassword){
        Cookies.set('token', token, {expires: 999});
    } else {
        Cookies.set('token', token);
    }
}

export const doLogout = () => {
    Cookies.remove('keystone.sid');
}