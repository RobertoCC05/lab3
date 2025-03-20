import { useState, useRef  } from 'react'
import './App.css'

function App() {

    const emailRef = useRef()
    const passwordRef = useRef('')
    const [error, setError] = useState('')
    

const login = (email, password) => {
  // Fake login check
  if (email === "admin@una.cr" && password === "1234") {    
    alert("Bienvenido");
    return true;
  }
  return false;
};


const handleLogin = () => {
   const email = emailRef.current.value;
   const password = passwordRef.current.value;
   const isSuccess = login(email, password);
   if(!isSuccess)   
   {
      setError("Credenciales incorrectas");
   }
}

  return (
    <>

      <h2>Login</h2>


          <input 
            type="email"
            placeholder='Correo'
            ref={emailRef}
            />
            <br/>
            <input
            type="password"
            placeholder='Contraseña'
            ref={passwordRef}
            />
            <br/>
            <button onClick={handleLogin}>Ingresar</button>
            { error && <p style={{ color: "red" }}>{error}</p> }
         

                
    </>
  )
}

export default App
