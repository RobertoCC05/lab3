/*import { useState, useRef  } from 'react'
import { useLogin } from '../Hooks/useLogin'

export default function Login() {

    const { setUser } = useContext(AuthContext)
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    
    
    const { login } = useLogin()
    
   

    const handleLogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const isSuccess = login(email, password);
        if(!isSuccess)   
        {
            setError("Credenciales incorrectas");
        }
        else
        {
            alert("Bienvenido" + email)    
            setUser(email)        
        }
    }


    return (
        <>        
              <h2>Login</h2>                      
              <div>
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
              </div>                     
        </>
    )
}*/