import { AuthContextProvider } from "./components/context/AuthContext"
import Router from "./routes/Router"

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  )
}

export default App
