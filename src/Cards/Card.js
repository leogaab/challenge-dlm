import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = () => {

  const [results, setResults] = useState(null)

  useEffect(() =>  {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()
      .then(resp => setResults(resp) )
    )
  }, [results])
  
  console.log('results: ', results)
  return (
    <Container>
      <CardContainer>
          {results && results.map( result => (
            <Item key={result.id}>
              <ItemTitle>{result.title}</ItemTitle>
              <ItemDescription>{result.body}</ItemDescription>
            </Item>
          ))}
      </CardContainer>
    </Container>
  )
}

export default Card;

const Container = styled.div`
  border: 2px solid red;
  margin-left: 12vw;
`

const CardContainer = styled.ul`
  list-style-type: none;
  border: 2px solid blue;
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.li`
  border: 2px solid green;
  border-radius: 4px;
  padding: 20px;
  margin: 10px auto;
  max-width: 25vw;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
`

const ItemTitle = styled.h2`
  margin-top: 0;
  color: #2c3e50;
  line-break: strict;
`

const ItemDescription = styled.p``