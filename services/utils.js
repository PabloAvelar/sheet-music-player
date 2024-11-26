import axios from 'axios';

export async function getByUrl(url){
    const {data} = await axios.get(url)
    return data;
}

export async function postByUrl(url,data){
    const dato = await axios.post(url,data);
    return dato.data;
}

export async function reqByToken(url,method,token,data){
    try {
        const res = await axios({
            url: url,
            method: method,
            data: data,
            headers: {
                "Authorization": `Token ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        });

        return res.data;
    } catch (error) {
        console.error("Request Error:", error);
        throw error;
    }
}

export async function reqNoToken(url, method, data) {
    try {
        const res = await axios({
            url: url,
            method: method,
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

        return res.data;
    }
    catch (error) {
        // Manejar errores aquí si es necesario
        console.error("Error making request:", error);
        throw error; // Puedes decidir si quieres propagar el error o manejarlo de alguna manera
    }
}