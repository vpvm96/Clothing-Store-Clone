import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
  firebaseAddNewProduct,
  firebaseGetProducts,
} from "../apis/firebaseService"

const useProducts = () => {
  const queryClient = useQueryClient()

  const productsQuery = useQuery(["products"], firebaseGetProducts, {
    staleTime: 1000 * 60,
  })

  const addProduct = useMutation(
    ({ product, url }) => firebaseAddNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  )

  return { productsQuery, addProduct }
}

export default useProducts
