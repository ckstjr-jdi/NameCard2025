import styled from "styled-components"
import Header from "../include/Header"
import Footer from "../include/Footer"

const LoginDiv = styled.div`
    width: 30em;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;    
`
const Section = styled.div`
    background-color: white;    
`
const ListUl = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0.5rem; 
`
const ItemLi = styled.li`
    margin-bottom: 0.5em;
`
const BtnLogin = styled.button`
    width: 80%;
    height: 2.5em;
    font-size: 1.2rem;
    border-radius: 1.2rem;
    background-color: transparent;
    cursor: pointer;
    border: 0.2rem solid lightgray;
    outline: 0;
    &:hover{
      background-color: #e8e7e6;//#FEFCF3 , #F5EBE0
    }
`


const Login = () => {
  const onLogin = () => {

  }
  return (
    <>
      <LoginDiv>
        <Header />
        <Section>
          <h1>Login</h1>
          <ListUl>
            <ItemLi>
              <BtnLogin onClick={onLogin}>Google</BtnLogin>
            </ItemLi>
            <ItemLi>
              <BtnLogin onClick={onLogin}>Github</BtnLogin>
            </ItemLi>            
          </ListUl>
        </Section>
        <Footer />
      </LoginDiv>
    </>
  )
}

export default Login