import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;

  min-width: 21.1669rem;

  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme['text-primary']};
  border-radius: 0.25rem;
`

export const MovieImage = styled.img`
  width: 9.1875rem;
  height: 11.75rem;
`

export const MovieTitle = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme['text-black']};
`

export const MoviePrice = styled.strong`
  font-size: 1rem;
  font-weight: bold;
`

export const ButtonCartIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2125rem;

  > img {
    width: 0.85rem;
    height: 0.85rem;
  }

  > span {
    font-size: 0.75rem;
    font-weight: 400;
  }
`
