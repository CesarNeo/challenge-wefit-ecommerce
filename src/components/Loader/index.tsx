import loaderImg from '../../assets/images/loader.png'
import * as S from './styles'

function Loader() {
  return (
    <S.Container>
      <S.Spinner src={loaderImg} alt="Carregando" />
    </S.Container>
  )
}

export default Loader
