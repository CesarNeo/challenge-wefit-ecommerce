import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;

  border-radius: 0.5rem;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.placeholder};
  transition: all 0.2s;

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme['text-primary']};
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const ButtonSearchIcon = styled.button<{ isFocused: boolean }>`
  color: ${({ theme, isFocused }) =>
    isFocused ? theme['text-primary'] : theme.placeholder};
`

export const Input = styled.input`
  flex: 1;

  font-size: 1rem;
  color: ${({ theme }) => theme['text-primary']};
  font-weight: 400;
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`
