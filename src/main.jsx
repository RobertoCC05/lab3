import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  // El AuthProvider es un componente que proporciona el contexto de autenticación a toda la aplicación.
  <AuthProvider>
    <App />
  </AuthProvider>
)
