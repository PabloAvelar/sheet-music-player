import { postByUrl, getByUrl, reqByToken, reqByTokenNoData } from "./utils";
const baseUrl = 'http://localhost:8000/api/v1';

async function login(data) {
    const endpoint = baseUrl + '/login/';
    const res = postByUrl(endpoint, data);
    return res;
}

async function register(data) {
    const endpoint = baseUrl + '/register/';
    const res = postByUrl(endpoint, data);
    return res;
}

export default
    {
        login, register
    };