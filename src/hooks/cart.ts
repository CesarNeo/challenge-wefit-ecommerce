import { useContext } from 'react'

import { CartContext } from '../contexts/cart'

function useCart() {
  return useContext(CartContext)
}

export default useCart
