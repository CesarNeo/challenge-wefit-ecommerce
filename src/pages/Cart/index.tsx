import { useState } from 'react'

import Button from '../../components/Button'
import CartEmpty from '../../components/CartEmpty'
import ListCartProductsMobile from '../../components/ListCartProductsMobile'
import ListCartProductsTableDesktop from '../../components/ListCartProductsTableDesktop'
import PurchaseCompleted from '../../components/PurchaseCompleted'
import useCart from '../../hooks/cart'
import { formatPrice } from '../../utils'
import * as S from './styles'

function CartPage() {
  const [isPurchaseCompleted, setIsPurchaseCompleted] = useState(false)
  const { cart, resetCart } = useCart()

  if (isPurchaseCompleted) {
    return <PurchaseCompleted />
  }

  if (!cart.length) {
    return <CartEmpty />
  }

  const totalCart = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)
  const totalCartFormatted = formatPrice(totalCart)

  function handleCompleteOrder() {
    setIsPurchaseCompleted(true)
    resetCart()
  }

  return (
    <S.CartContainer>
      <ListCartProductsMobile />

      <ListCartProductsTableDesktop />

      <S.CartTotalContainer>
        <S.CartTotalPriceContent>
          <span>Total</span>
          <strong>{totalCartFormatted}</strong>
        </S.CartTotalPriceContent>

        <S.ButtonCompleteOrderContainer>
          <Button onClick={handleCompleteOrder}>Finalizar pedido</Button>
        </S.ButtonCompleteOrderContainer>
      </S.CartTotalContainer>
    </S.CartContainer>
  )
}

export default CartPage
