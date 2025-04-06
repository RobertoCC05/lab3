import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext";
export default function WelcomeWidget() {
    // Se consume el contexto de autenticación
    // Se obtiene el usuario autenticado del contexto
    const { user } = useContext(AuthContext);
    return (
        <>
            <h2>Welcome to our site {user.email}</h2>
        </>
    )
}