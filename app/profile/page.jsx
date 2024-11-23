import AuthCheck from "../../components/authmiddleware";
import { deleteSession, getSession, saveSession } from "../../lib/authSession";

function Profile() {
    // Establecer la sesión


    return (
        <AuthCheck>
            <div>Contenido protegido</div>
            <div>Contenido protegido</div>
            <div>Contenido protegido</div>
            <div>Contenido protegido</div>
            <div>Contenido protegido</div>
        </AuthCheck>
    )
}

export default Profile;
