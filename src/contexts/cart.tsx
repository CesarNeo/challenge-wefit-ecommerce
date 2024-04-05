import { createContext, ReactNode, useCallback, useState } from 'react'

import { Movie } from '../types'

type CartItem = Movie & { quantity: number }

interface CartContextData {
  cart: CartItem[]
  addToCart: (movie: Movie) => void
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

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

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
