import styled from "styled-components"
import Table from "./Table"

const Search = () => {

  return (
    <Container>
      <Title>Hola soy el Container del search</Title>
      <Searchbar type='text' />
      <Table />
    </Container>
  )
}

export default Search

const Container = styled.div`
  border: 2px solid black;
  margin-left: 12vw;
`

const Title = styled.h1``

const Searchbar = styled.input``