import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap; /* 한 줄에 하나씩 떨어질 수 있도록 랩을 주고 */
  border-top: 1px solid black;
  border-left: 1px solid black;
  margin-bottom: 1em;    
`

const Select = styled.select`
  font-size: 0%.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-radius: 1px solid black;
  background: white;
  flex: 1 1 30%;
  &:focus {
    outline: 0;
  }
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

const CardEditorForm = ({FileInput, card}) => {
  const {name, theme, fileName, fileURL} = card
  const handleChange = (event) => {
    console.log(event.currentTarget)
  }
  return (
    <Form>
      <Select name='theme' value={theme} onChange={handleChange}>
        <option placeholder="ligt">light</option>
        <option placeholder="dart">dart</option>
        <option placeholder="coloful">coloful</option>
      </Select>
    </Form>
  )
}

export default CardEditorForm
