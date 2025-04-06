import { useState, useRef } from "react";
// Se extrae la logica de autenticacion a un hook
// Se crea un hook para manejar el estado del usuario
export function useUserState(){

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState("");

    const login = (email, password) => {
        if(email === "admin" && password === "1234"){
            return true
        }else{
            return false
        }
    }

    // Se exportan las referencias y el estado de error
    // Se exporta la funcion de login
    // Se exporta la funcion para setear el error
    // Se exporta el hook para ser usado en el componente Login
    return { emailRef, passwordRef, error, login, setError }
}