import styled from "styled-components"
import Header from "../include/Header"
import Footer from "../include/Footer"
import { useNavigate } from "react-router"
import { Logout } from "../../service/authApi"


const MarkerDiv = styled.div`
    width: 100%;
    height: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    background-color: makerWhite;
`
const ContainerDiv = styled.div`
  display: flex;
  flex: 1; /* 중간에 여백을 가득채우도록 1을 준다 */
  min-height: 0;
`

const Maker = () => {
  const navigate = useNavigate()
  const handleLogout = async() => {
    await Logout()
    //로그아웃이 되고 나면 처음 화면으로 간다.
    navigate('/')
  }

  return (
    <MarkerDiv>
      <Header handleLogout={handleLogout} />
      <ContainerDiv>
        <p>CardEditor</p>
        <p>Preview</p>
      </ContainerDiv>
      <Footer /> 
    </MarkerDiv>
  )
}

export default Maker
