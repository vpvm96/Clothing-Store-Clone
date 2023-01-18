import React from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../components/context/AuthContext"
import User from "../components/User"
import Icon from "../assets/icons/icon"
import Button from "../components/ui/Button"

const Header = () => {
  const { user, login, logout } = useAuthContext()

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <Icon name="shoppingBag" />
        <h1>Clothing Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && <Link to="/carts">Carts</Link>}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <Icon name="newProduct" />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text="Login" onClick={login} />}
        {user && <Button text="Logout" onClick={logout} />}
      </nav>
    </header>
  )
}

export default Header
