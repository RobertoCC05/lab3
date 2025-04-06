import React, { createContext, useState } from 'react';
import { useUserState } from '../Hooks/useUserState';

// 1. crear un nuevo contexto
export const AuthContext = createContext();

// 2. Crear un Provider para compartir el estado
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const { login } = useUserState();
    // El provider es un componente que envuelve toda la aplicacion y proporciona el contexto a todos los componentes hijos
    // El provider recibe un valor que es el estado o los estados que queremos compartir
    return(
        <AuthContext.Provider value= {{user, setUser, login}}>
            {children}
        </AuthContext.Provider>

    );
};
