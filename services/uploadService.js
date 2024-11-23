import { postByUrl, getByUrl, reqByToken, reqByTokenNoData } from "./utils";
const baseUrl = 'http://localhost:8000/api/v1';

async function sendImage(data) {
    const endpoint = baseUrl + '/upload/';
    const res = postByUrl(endpoint, data);
    return res;
}

export default
    {
        sendImage
    };