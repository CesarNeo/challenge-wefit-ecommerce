import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: grid;
  row-gap: 1rem;
  column-gap: 1.5rem;
  grid-template-columns: repeat(3, auto);
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
