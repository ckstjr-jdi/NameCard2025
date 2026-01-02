import styled from 'styled-components'
import styles from "./card.module.css"


const CardLi = styled.li`
display: flex; /* 이렇게 하면 이름같은 것들이 이미지 옆으로 간다 */
align-items: center;
width: 100%;
background-color: lightpink;
margin-bottom: 0.5em; /* 한덩어리가 조금씩 떨어져 있게됨 */
border-radius: 1em;
padding: 0.2em 0;
box-shadow: 6px 6px 8px 0px rgba(217, 217, 217, 1);
max-width: 30rem; /* 너비가 넓어질 수 있는 제약을 준다 */    
`
const AvatarImg = styled.img`
width: 10em;
height: 10em;
padding: 1em; /* 이미지 안쪽으로 패딩 주기 */
margin-left: 0.5em; /* 이미지 앞쪽에 마진 주기 */
margin-right: 1em; /* 이미지와 글자 사이에 마진 주기 */
border-radius: 50%; /* 사진이 네모나도 동그랗게 만들기 */    
`    
const Card = ({card}) => {
  const DEFAULT_IMAGE = '/images/default_logo.png'
  const {theme, fileName, fileURL} = card
  const url = fileURL || DEFAULT_IMAGE
  const getStyles = (theme) => {
    switch(theme) {
      case 'dark':
        return styles.dark
      case 'light':
        return styles.light
      case 'colorful':
        return styles.colorful
      default:
        throw new Error(`unknown theme: ${theme}`)
    }
  }
  return (
    <CardLi className={`${styles.card} ${getStyles(theme)}`}>
      <AvatarImg src={url} alt="profile photo"/>
      <div style={{widht: '100%'}}>
        {fileName}
      </div>
    </CardLi>
  )
}

export default Card