import { createContext, useContext, useEffect, useState } from "react"
import {
  firebaseGoogleLoginService,
  firebaseLogoutService,
  firebaseUserStateChange,
} from "../apis/firebaseService"

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState()

  useEffect(() => {
    firebaseUserStateChange(setUser)
  }, [])
  return (
    <AuthContext.Provider
      value={{
        user,
        uid: user && user.uid,
        login: firebaseGoogleLoginService,
        logout: firebaseLogoutService,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
