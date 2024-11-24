import { getSession } from "../lib/authSession";
import { postByUrl, getByUrl, reqByToken, reqByTokenNoData } from "./utils";

const baseUrl = 'http://localhost:8000/api/v1';
const token = getSession()?.token;

async function sendImage(data) {
    const endpoint = baseUrl + '/upload/';
    const res = reqByToken(endpoint, 'POST', token, data);
    return res;
}

export default
    {
        sendImage
    };