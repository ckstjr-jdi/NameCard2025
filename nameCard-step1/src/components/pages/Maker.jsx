import styled from "styled-components"
import Header from "../include/Header"
import Footer from "../include/Footer"
import { useNavigate } from "react-router"
import { Logout } from "../../service/authApi"
import CardEditor from "./CardEditor"
import Preview from "./Preview"
import { useState } from "react"


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

  const [cards, setCards] = useState({
    '1':{
      id: '1',
      theme: 'dark',
      fileName: 'lee',
      fileURL: 'https://res.cloudinary.com/dabcqtmbm/image/upload/v1707156245/lmbxljzqmcylnyngwafk.jpg',
    },
    '2':{
      id: '2',
      theme: 'light',
      fileName: 'kim',
      fileURL: null,
    },
  });   

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
        <CardEditor />
        <Preview cards={cards}/>
      </ContainerDiv>
      <Footer /> 
    </MarkerDiv>
  )
}

export default Maker
