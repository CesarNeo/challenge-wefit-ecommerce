import trashIcon from '../../assets/icons/trash-icon.svg'
import useCart from '../../hooks/cart'

interface ButtonRemoveCartProductProps {
  movieId: number
}

function ButtonRemoveCartProduct({ movieId }: ButtonRemoveCartProductProps) {
  const { removeMoveFromCart } = useCart()

  function handleRemoveProduct() {
    removeMoveFromCart(movieId)
  }

  return (
    <button type="button" onClick={handleRemoveProduct}>
      <img src={trashIcon} alt="Ícone de lixeira" />
    </button>
  )
}

export default ButtonRemoveCartProduct
