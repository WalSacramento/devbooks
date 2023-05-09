import { Container, SearchContainer, SearchButton } from './Search.styles'

import { SearchBox } from '../../components/SearchBox'

export function Search() {
  return (
    <Container>
      <h1>Busque seus livros favoritos!</h1>
      <SearchContainer>
        <SearchBox />
        <SearchButton>Buscar</SearchButton>
      </SearchContainer>
    </Container>
  )
}
