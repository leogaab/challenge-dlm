import { useEffect, useState } from "react";
import styled from "styled-components";

const Card = () => {

  const [results, setResults] = useState(null)

  useEffect(() =>  {

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json()
      .then(resp => setResults(resp) )
    )
  }, [])
  
  console.log('results: ', results)
  return (
    <Container>
      <ul>
          {results && results.map( result => <li>{result.id}</li>)}
      </ul>
    </Container>
  )


}

export default Card;

const Container = styled.div`
  border: 2px solid red;
  margin-left: 12vw;
`