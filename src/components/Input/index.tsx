import { ComponentProps, forwardRef, ForwardRefRenderFunction } from 'react'

import SearchIcon from '../SearchIcon'
import * as S from './styles'

type InputProps = ComponentProps<'input'>

const Input = forwardRef((props, ref) => {
  return (
    <S.Container>
      <button type="submit">
        <SearchIcon />
      </button>
      <S.Input ref={ref} {...props} />
    </S.Container>
  )
}) as ForwardRefRenderFunction<HTMLInputElement, InputProps>

Input.displayName = 'Input'

export default Input
