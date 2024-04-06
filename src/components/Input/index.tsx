import {
  ComponentProps,
  forwardRef,
  ForwardRefRenderFunction,
  useState,
} from 'react'

import SearchIcon from '../SearchIcon'
import * as S from './styles'

type InputProps = ComponentProps<'input'>

const Input = forwardRef(({ onFocus, onBlur, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <S.Container>
      <S.ButtonSearchIcon type="submit" isFocused={isFocused}>
        <SearchIcon />
      </S.ButtonSearchIcon>
      <S.Input
        ref={ref}
        onFocus={(focus) => {
          onFocus?.(focus)
          setIsFocused(true)
        }}
        onBlur={(blur) => {
          onBlur?.(blur)
          setIsFocused(false)
        }}
        {...props}
      />
    </S.Container>
  )
}) as ForwardRefRenderFunction<HTMLInputElement, InputProps>

Input.displayName = 'Input'

export default Input
