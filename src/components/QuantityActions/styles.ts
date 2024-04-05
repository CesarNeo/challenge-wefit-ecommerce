import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 0.6875rem;
  align-items: center;

  button {
    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const ContainerQuantity = styled.div`
  max-width: 3.6875rem;
  width: 100%;
  height: 1.625rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.25rem;

  > span {
    font-size: 0.875rem;

    color: ${({ theme }) => theme['text-primary']};
  }
`
