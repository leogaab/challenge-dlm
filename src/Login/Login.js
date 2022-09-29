import { useState } from "react";
import styled from "styled-components";

const LogIn = ({onClick}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    };
    localStorage.setItem('user-data', JSON.stringify(userData));
    onClick()
  }


  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Welcome back!</Title>
        <Input type="text" placeholder="Email" onChange={ e => setEmail(e.target.value) } value={email} />
        <Input type="password" placeholder="Password" onChange={ e => setPassword(e.target.value) } value={password}/>
        <Button>
          Login
        </Button>
        <Register onClick={() => alert('Working on it')}>
          Or create an account
        </Register>
      </Form>
    </Container>
  )
}

export default LogIn

const Container = styled.div`
  height: 100vh;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #34495e;
  `

const Form = styled.form`
  background-color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  width: 25vw;
  height: 35vh;
  gap: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: -1px 8px 26px 6px rgba(0,0,0,0.2);
  -webkit-box-shadow: -1px 8px 26px 6px rgba(0,0,0,0.2);
  -moz-box-shadow: -1px 8px 26px 6px rgba(0,0,0,0.2);
  padding: 10px;
  box-sizing: content-box;
`

const Title = styled.h1`
  color: #e67e22;
  text-align: center;
`

const Input = styled.input`
  width: 80%;
  border: none;
  padding: 15px;
  border-radius: 20px;
  outline: 1px solid #e67e22;
`

const Button = styled.button`
  cursor: pointer;
  width: 90%;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #e67e22;

  &:hover {
    background-color: #d35400;
  }
`

const Register = styled.a`
  color: #e67e22;
  text-align: center;
  margin: 0;
  cursor: pointer;
`