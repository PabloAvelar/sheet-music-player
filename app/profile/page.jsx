import AuthCheck from "../../components/authmiddleware";

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
