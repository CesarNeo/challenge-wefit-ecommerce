import { ComponentProps } from 'react'

import * as S from './styles'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'success'
}

function Button({
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  return <S.Container type={type} variant={variant} {...props} />
}

export default Button
