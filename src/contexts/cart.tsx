import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { Movie } from '../types'

type CartItem = Movie & { quantity: number }

interface CartContextData {
  cart: CartItem[]
  resetCart: () => void
  addToCart: (movie: Movie) => void
  removeMoveFromCart: (movieId: number) => void
  incrementProductQuantity: (movieId: number) => void
  decrementProductQuantity: (movieId: number) => void
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storagedCart = localStorage.getItem('@wemovie:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  const addToCart = useCallback((movie: Movie) => {
    setCart((state) => {
      const movieExists = state.find((item) => item.id === movie.id)

      if (movieExists) {
        return state.map((item) =>
          item.id === movie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...state, { ...movie, quantity: 1 }]
    })
  }, [])

  const removeMoveFromCart = useCallback((id: number) => {
    setCart((state) => state.filter((item) => item.id !== id))
  }, [])

  const incrementProductQuantity = useCallback((id: number) => {
    setCart((state) =>
      state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }, [])

  const decrementProductQuantity = useCallback((id: number) => {
    setCart((state) => {
      const movieExists = state.find((item) => item.id === id)

      if (!movieExists) {
        return state
      }

      if (movieExists.quantity === 1) {
        return state.filter((item) => item.id !== id)
      }

      return state.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        }

        return item
      })
    })
  }, [])

  const resetCart = useCallback(() => setCart([]), [])

  useEffect(() => {
    localStorage.setItem('@wemovie:cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        resetCart,
        addToCart,
        removeMoveFromCart,
        incrementProductQuantity,
        decrementProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
