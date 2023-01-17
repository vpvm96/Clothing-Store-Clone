import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import AllProducts from "../pages/AllProducts"
import NewProducts from "../pages/NewProducts"
import ProductsDetail from "../pages/ProductsDetail"
import MyCart from "../pages/MyCart"
import NotFound from "../pages/NotFound"
import Header from "../pages/Header"
import ProteactedRoute from "../pages/ProtectedRoute"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route
          path="/products/new"
          element={
            <ProteactedRoute requireAdmin>
              <NewProducts />
            </ProteactedRoute>
          }
        />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route
          path="/cart"
          element={
            <ProteactedRoute>
              <MyCart />
            </ProteactedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
