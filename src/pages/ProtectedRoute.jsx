import React from "react"
import { Navigate } from "react-router-dom"
import { useAuthContext } from "../components/context/AuthContext"

const ProteactedRoute = ({ children, requireAdmin }) => {
  const { user } = useAuthContext()

  if (!user || (requireAdmin && !user.admin)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProteactedRoute
