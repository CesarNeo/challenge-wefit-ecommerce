import { ComponentProps } from 'react'

import * as S from './styles'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'success'
}

function Button({ variant = 'primary', ...props }: ButtonProps) {
  return <S.Container variant={variant} {...props} />
}

export default Button
