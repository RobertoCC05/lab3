import WelcomeWidget from "./WelcomeWidget";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";   
// Se elimina el prop drilling
export default function Home(){
    const { logOut } = useContext(AuthContext);
    return (
        <>
        <h1>You are at Home!</h1>
        <WelcomeWidget />
        <button onClick={ logOut }>Logout</button>
        </>
        
    )
}