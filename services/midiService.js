import { getSession } from "../lib/authSession";
import { postByUrl, getByUrl, reqByToken, reqNoToken } from "./utils";

const baseUrl = 'http://localhost:8000/api/v1';

async function getMidiFile(data) {
    const endpoint = baseUrl + '/getmidifile/';
    const res = getByUrl(endpoint);
    return res;
}

export default {
    getMidiFile
};