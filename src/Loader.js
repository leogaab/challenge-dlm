import styled from "styled-components"

const Loader = () => {

  return (
    <Container>
      <Title>Loading</Title>
    </Container>
  )
}

export default Loader

const Container = styled.div`
  margin: 0 auto;
  background-color: lightcoral;
`

const Title = styled.h1`
  color: blue;
`