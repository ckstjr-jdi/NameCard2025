import React from 'react'
import styled from 'styled-components'

const EditorDiv = styled.div`
	flex-basis: 50%;
	border-right: 1px solid #9E7676;/* editor와 preview사이에 구분선 넣기 */
	padding: 0.5em 2em;
	overflow-y: auto;
`
const TitleH1 = styled.h1`
	width: 100%;
	text-align: center;
	margin-bottom: 1em;
	color: #594545;
`

const CardEditor = () => {
  return (
    <EditorDiv>
      <TitleH1>명함 에디터</TitleH1>
    </EditorDiv>

  )
}

export default CardEditor
