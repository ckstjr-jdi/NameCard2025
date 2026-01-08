import styled from "styled-components"
import Header from "../include/Header"
import Footer from "../include/Footer"
import { useNavigate } from "react-router"
import { Logout, subscribeAuthChange } from "../../service/authApi"
import CardEditor from "./CardEditor"
import Preview from "./Preview"
import { useEffect, useState } from "react"


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
const Maker = ({FileInput, cardLogic}) => {

  const [cards, setCards] = useState({});   
  const [userId, setUserId] = useState();
  // 구글 로그인을 활용한 인증이므로 인증에 대한 내부 처리는 구글이 알고 있다.
  // 로그인이 풀렸는지 아직 유지되고 있는지 체크
  useEffect(() => {
    const unsubscribe = subscribeAuthChange((user) => {
      if(user){
        // 여기까지 진입이되면 로그인 상태라는 의미
        setUserId(user.uid)
      }
      //로그아웃 상태
      else{
        setUserId(null)
      }
    })
    //사용자 정의 함수
    //컴포넌트가 언마운트 구독 해제(후처리)
    return () => unsubscribe()
  },[])

  const navigate = useNavigate()
  const handleLogout = async() => {
    await Logout()
    //로그아웃이 되고 나면 처음 화면으로 간다.
    navigate('/')
  }

  // Firestore는 식별자가 존재하면 수정을 해주고 존재하지 않으면 새로 등록을 해줌.
  // 따라서 입력과 수정은 같은 프로세스임.
  // 새로 입력받는 값과 수정을 원하는 값들은 하위 컴포넌트 CardEditorForm과
  // CardAddForm에 있음.
  // 이 두 개의 하위 컴포넌트에서 사용자가 입력한 값을 상위 컴포넌트로 올려서 사용할 땐
  // 함수의 파라미터 자리와 props(properties)를 사용하면 된다.
  // Firebase에서 조회된 결과를 상위 컴포넌트에서 가지고 있으니 상위 컴포넌트에서 
  // 수정, 입력, 삭제를 처리힌다.
  // insertOrUpdateCard함수는 CardAddForm에서 호출하고
  // 파리미터도 CardAddForm에서 결정됨.
  const insertOrUpdateCard = card => {
    console.log('insertOrUpdateCard 호출')
    console.log(card)
    setCards(cards => {
      //추가 되기 전에 카드 정보 출력
      console.log(cards)
      //어차피 id가 오브젝트안에 없다면 새로운 것이 추가됨.
      const updated = {...cards}
      updated[card.id] = card
      return updated
    })
    console.log(`${userId}, ${card}`)
    cardLogic.saveCard(userId, card)
  }//end of insertOrUpdateCard
  //deleteCard는 CardEditorForm에서 호출하는 데
  //삭제 정보는 상위 컴포넌트인 Maker까지 전달 되어야 함.
  const deleteCard = card => {
    console.log('delteCard 호출')
     console.log(card)
     // delete from schedle where id = 2
     console.log(`삭제 카드 card.id ${card.id}`)
     setCards((cards) => {
      const updated = {...cards}
      delete updated[card.id]
      return updated
     })
     cardLogic.removeCard(userId, card)
  }//end of deleteCard
  return (
    <MarkerDiv>
      <Header handleLogout={handleLogout} />
      <ContainerDiv>
        <CardEditor FileInput={FileInput} 
        cards={cards} deleteCard={deleteCard} 
        insertOrUpdateCard={insertOrUpdateCard}/>
        <Preview cards={cards}/>
      </ContainerDiv>
      <Footer /> 
    </MarkerDiv>
  )
}

export default Maker
