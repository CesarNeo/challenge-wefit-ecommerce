import { darken } from 'polished'
import styled from 'styled-components'

interface ButtonProps {
  variant: 'primary' | 'success'
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0 0.5rem;

  border-radius: 0.25rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  background: ${({ theme, variant }) => theme[variant]};
  transition: all 0.2s;

  &:hover {
    background: ${({ theme, variant }) => darken(0.1, theme[variant])};
  }
`
