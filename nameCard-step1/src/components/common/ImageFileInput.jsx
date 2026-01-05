import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import styles from './imageFileInput.module.css'

const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* 아이템을 가운데 오게함 */
  align-items: center; /* 아이템을 중간 middle에 오게함 */  
`
const HiddenInput = styled.input`
  display: none;
`

const ImageFileInput = ({name}) => {
  // input type file은 숨기고 버튼을 눌렀을 때 file컴포넌트를 동작시키기
  // file 컴포넌트가 loding과 같은 상태가 바뀔 때마다 다시 생성된다??
  // 상태가 바뀌더라도 원래값을 유지해는 훅이 있다. - useRef
  const inputRef = useRef() //앞에 use로 시작되는 함수는 모두 Hook임
  // file명을 선택하고 업로드 중일 때 상태 관리
  const [loading, setLoading] = useState(false)
  const handleChange = () => {

    
  }
  // button의 디폴트 type은 submit이다.
  const onButtonClick = (event) => {
    event.preventDefault()
    // No file이 클릭되었을 때 버튼 클릭하기
    inputRef.current.click()
  }
  return (
    <ContainerDiv>
      <HiddenInput type='file'
      ref={inputRef}
      accept='image/*' name='file'
      onChange={handleChange}
      />
      {/* 로딩중이 아니면 아래 코드가 적용되고 */}
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.ping : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || 'No file'} {/* 참:name, 거짓:'No file' */}
        </button>
      )}
      
      {/* 로딩중이면 아래 코드가 적용됨 */}
      { loading && <div className={StyleSheet.loading}></div> }
    </ContainerDiv>
  )
}
export default ImageFileInput
