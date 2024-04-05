import { useNavigate } from 'react-router-dom'

import purchaseCompleteImg from '../../assets/images/purchase-completed.svg'
import useCart from '../../hooks/cart'
import Button from '../Button'
import * as S from './styles'

function PurchaseCompleted() {
  const { resetCart } = useCart()
  const navigate = useNavigate()

  function handleBackToHome() {
    resetCart()

    navigate('/')
  }

  return (
    <S.Container>
      <div>
        <h1>Compra realizada com sucesso!</h1>

        <S.PurchaseCompletedImg
          src={purchaseCompleteImg}
          alt="Imagem de compra concluída"
        />

        <S.PurchaseCompletedButtonContainer>
          <Button onClick={handleBackToHome}>Voltar</Button>
        </S.PurchaseCompletedButtonContainer>
      </div>
    </S.Container>
  )
}

export default PurchaseCompleted
