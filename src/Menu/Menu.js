import styled from 'styled-components'

const Menu = ({isLoggedIn, onClick}) => {

  const logout = () => {
    localStorage.removeItem('user-data')
    onClick()
  }

  return  (
    <Container>
      <LoginContainer>
        {isLoggedIn && (<LogOut onClick={logout}>Logout</LogOut>)}
      </LoginContainer>
      <RoutesContainer>
        <button>Cards</button>
        <button>Search</button>
      </RoutesContainer>
    </Container>
  )
}

export default Menu;

const Container = styled.div`
  min-width: 10vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
`

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid green;
  margin-bottom: 5vh;
  margin-top: 2vh;
`

const LogOut = styled.button``

const RoutesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`