import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap; /* 한 줄에 하나씩 떨어질 수 있도록 랩을 주고 */
  border-top: 1px solid black;
  border-left: 1px solid black;
  margin-bottom: 1em;    
`

const FileInputDiv = styled.div`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background: #F5EBE0;    
`	

const CardAddForm = ({FileInput}) => {
  return (
    <Form>
      <FileInputDiv>
        <FileInput />
      </FileInputDiv>
    </Form>
  )
}

export default CardAddForm
