import WelcomeWidget from "./WelcomeWidget";
// Se elimina el prop drilling
export default function Home(){

    return (
        <>
        <h1>You are at Home!</h1>
        <WelcomeWidget />
        </>
        
    )
}