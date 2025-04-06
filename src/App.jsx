import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  //Se usa el AuthContext para obtener el usuario
  //Si no hay usuario registrado se muestra el componente Login
  //Si hay usuario registrado se muestra el componente Home
 const { user } = useContext(AuthContext);
  return (
    <>
        <div>
          {
            !user
            ? 
            //Se use el componente Login si no hay usuario registrado
            <Login/>
            : 
            //Se usa el componente Home si hay usuario registrado
            <Home />
          }
        </div>
    </>
  );
}

export default App;
