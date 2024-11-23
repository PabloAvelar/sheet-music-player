'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSession } from '../lib/authSession';
import Loading from './loading';

export default function PreventAuthUser({ children }) {
    const [session, setSession] = useState({});
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const sessionObject = getSession();
        setSession(sessionObject);
        if (sessionObject) {
            // Si hay sesión, redirige a la pagina inicial
            router.push('/');
        }

        // Cambiar el estado de carga a false después de la validación
        setLoading(false);
    }, [router]);  // Solo se ejecuta una vez

    if (loading) {
        return <Loading />;  // Muestra un mensaje de carga mientras se consulta la sesión
    }

    // Solo renderiza el contenido si no hay sesión
    if (session != null) {
        console.log("hay sesion we")
        return <></>;  // O redirige a la página de login si no hay sesión
    }

    return children;
}
