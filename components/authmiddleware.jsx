'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSession } from '../lib/authSession';
import Loading from './loading';

export default function AuthCheck({ children, hideForAuthUser }) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const sessionObject = getSession();
        if (!sessionObject) {
            // Si no hay sesión, redirige al login
            router.push('/login');
        } else {
            // Si hay sesión, guarda los datos
            setSession(sessionObject);
        }

        // Cambiar el estado de carga a false después de la validación
        setLoading(false);
    }, [router]);  // Solo se ejecuta una vez

    if (loading) {
        return <Loading />;  // Muestra un mensaje de carga mientras se consulta la sesión
    }

    // Solo renderiza el contenido si hay sesión
    if (!session) {
        return null;  // O redirige a la página de login si no hay sesión
    }

    return children;
}
