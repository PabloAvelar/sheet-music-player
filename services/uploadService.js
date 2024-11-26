import { getSession } from "../lib/authSession";
import { postByUrl, getByUrl, reqByToken, reqNoToken } from "./utils";

const baseUrl = 'http://localhost:8000/api/v1';
const auth = getSession();

async function sendImage(data) {
    const endpoint = baseUrl + '/upload/';
    let res;

    if (auth) {
        res = reqByToken(endpoint, 'POST', auth.token, data);
    } else {
        res = reqNoToken(endpoint, 'POST', data)
    }
    return res;
}

export default
    {
        sendImage
    };