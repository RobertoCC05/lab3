import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';
import { useUserState } from '../Hooks/useUserState';

export default function Login() {
    // Se importa el contexto de autenticación y el hook useUserState
    // Se utiliza el hook useContext para acceder al contexto de autenticación
   
    const { setUser } = useContext(AuthContext);
    
     // Se utiliza el hook useUserState para manejar el estado del usuario
    // Se extraen las referencias de los inputs y el estado de error del hook useUserState
    const { emailRef, passwordRef, error, login, setError} = useUserState();
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
            // importante usar {email} para que no se rompa el contexto
            // se establece el usuario en el contexto de autenticación
            setUser({email}) 
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
}