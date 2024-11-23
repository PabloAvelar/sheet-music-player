import Cookies from 'js-cookie';
const SESSION_COOKIE_NAME = 'session';

export function saveSession(sessionObject) {
    Cookies.set(SESSION_COOKIE_NAME, JSON.stringify(sessionObject));
}

export function deleteSession() {
    Cookies.remove(SESSION_COOKIE_NAME);
}

export function getSession() {
    const session = Cookies.get(SESSION_COOKIE_NAME);
    return session ? JSON.parse(session) : null; // Deserializar si existe
}