import React, { createContext, useState, useContext } from 'react'


 const userContext =   createContext();
 const userToggleContext = createContext();

      export const useUserContext = () => {
          return useContext(userContext)
      } 
      export const useToggleContext = () => {
          return useContext(userToggleContext)
      } 



      

export const UserProvider = ({ children }) => {
  const [ user, setUser ] = useState(null);

    const cambiarLogin = () => {
    if (user) {
      setUser(null)
    } else {
      setUser ({
        name: 'DonJulio',
        web: 'donjulio.dev'
      })
    }
  }
  
  return (
    < userContext.Provider value={user} >
      <userToggleContext.Provider value={ cambiarLogin } >
        { children }
      </userToggleContext.Provider>
    </userContext.Provider>
  )
}
