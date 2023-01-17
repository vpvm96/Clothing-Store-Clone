import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  firebaseGoogleLoginService,
  firebaseLogoutService,
  firebaseUserStateChange,
} from "../apis/firebaseService"
import User from "../components/User"
import Icon from "../assets/icons/icon"

const Header = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    firebaseUserStateChange(setUser)
  }, [])

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <Icon name="shoppingBag" />
        <h1>Clothing Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <Icon name="newProduct" />
        </Link>
        {user && <User user={user} />}
        {!user && <button onClick={firebaseGoogleLoginService}>Login</button>}
        {user && <button onClick={firebaseLogoutService}>Logout</button>}
      </nav>
    </header>
  )
}

export default Header
