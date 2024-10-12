import Boton from "@/components/Boton";
import Contenedor from "@/components/Contenedor";
import Image from "next/image";

export default function Home() {
    const nombre = "saul";

    return (
        <main>
            <div className="bg-red-700">
                <p className="text-sm">Jesus Alejandro</p>
            </div>

            <Contenedor>
                <Boton texto={nombre} color="bg-red-500" />
                <Boton texto="dieguito" color="bg-orange-500" />
                <p>asdsa</p>
                <p>asdsa</p>
                <p>asdsa</p>
                <p>asdsa</p>
            </Contenedor>

        </main>
    );
}
