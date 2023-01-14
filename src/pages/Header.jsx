import { Link } from "react-router-dom"
import Icon from "../assets/icons/icon"

const Header = () => {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <h1>Clothing Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <Icon name="newProduct" />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  )
}

export default Header
