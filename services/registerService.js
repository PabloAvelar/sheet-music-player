import { postByUrl, getByUrl, reqByToken, reqByTokenNoData } from "./utils";
const baseUrl = 'http://localhost:8000/api/v1';

async function login(data) {
    const urlPostLogIn = baseUrl + '/login/';
    const res = postByUrl(urlPostLogIn, data);
    return res;
}

async function register(data) {
    const urlPostLogIn = baseUrl + '/register/';
    const res = postByUrl(urlPostLogIn, data);
    return res;
}

export default
    {
        login, register
    };