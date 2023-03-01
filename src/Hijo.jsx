 import { useUserContext, useToggleContext } from './UserProvider'

export const Hijo = () => {
  
  const user =  useUserContext();
  const cambiarLogin =useToggleContext()
  return (
    <div>
    
        <h1>Componente hijo </h1>
         { user && <h2>simple useContextExample visit  {user.web}</h2>}
         { user && <p>Hi! {user.name}</p>}
          <button onClick={ cambiarLogin } >Cabia Login</button>
    </div>
  )
}
