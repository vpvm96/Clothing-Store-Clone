import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthContextProvider } from "./components/context/AuthContext"
import Router from "./routes/Router"

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
