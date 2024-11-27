import { getSession } from "../lib/authSession";
import { postByUrl, getByUrl, reqByToken, postByUrlMidi } from "./utils";

const baseUrl = 'http://localhost:8000/api/v1';

async function retrieveMidiFile(data) {
    const endpoint = baseUrl + '/retrievemidifile/';
    const res = postByUrlMidi(endpoint, data);
    return res;
}

export default {
    retrieveMidiFile
};