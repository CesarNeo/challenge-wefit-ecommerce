import minusCircleIcon from '../../assets/icons/minus-circle-icon.svg'
import plusCircleIcon from '../../assets/icons/plus-circle-icon.svg'
import useCart from '../../hooks/cart'
import * as S from './styles'

interface QuantityActionsProps {
  movieId: number
  quantity: number
}

function QuantityActions({ movieId, quantity }: QuantityActionsProps) {
  const { incrementProductQuantity, decrementProductQuantity } = useCart()

  function handleIncrementQuantity() {
    incrementProductQuantity(movieId)
  }

  function handleDecrementQuantity() {
    decrementProductQuantity(movieId)
  }

  return (
    <S.Container>
      <button type="button" onClick={handleDecrementQuantity}>
        <img src={minusCircleIcon} alt="Ícone de diminuir quantidade" />
      </button>

      <S.ContainerQuantity>
        <span>{quantity}</span>
      </S.ContainerQuantity>

      <button type="button" onClick={handleIncrementQuantity}>
        <img src={plusCircleIcon} alt="Ícone de adicionar quantidade" />
      </button>
    </S.Container>
  )
}

export default QuantityActions
