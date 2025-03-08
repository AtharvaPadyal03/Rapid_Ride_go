import React, { useState } from 'react'
export const UserDataContext = React.createContext()

const UserContext = ({children}) => {
  const [user,setUser] = useState({
    email:'',
    fullName:{
        firstname:'',
        lastname:''
    }
  })  
  return (
    <div>
      <UserDataContext.Provider value={{user,setUser}}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
