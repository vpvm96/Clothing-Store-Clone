import { useAuthContext } from "../context/AuthContext"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  firebaseAddUpdateToCart,
  firebaseGetCart,
  firebaseRemoveCart,
} from "../apis/firebaseService"

const useCart = () => {
  const { uid } = useAuthContext()
  const queryClient = useQueryClient()

  const cartQuery = useQuery(["carts", uid || ""], () => firebaseGetCart(uid), {
    enabled: !!uid,
  })

  const addOrUpdateItem = useMutation(
    (product) => firebaseAddUpdateToCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", uid])
      },
    }
  )

  const removeItem = useMutation((id) => firebaseRemoveCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid])
    },
  })

  return { cartQuery, addOrUpdateItem, removeItem }
}

export default useCart
