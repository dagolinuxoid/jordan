import styled from 'styled-components'

const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  max-width: max-content;
  gap: 3px;
  margin-right: 3em;
`
const InputStyled = styled.input`
  display: block;
  border-radius: 15px;
  outline: none;
  padding: 5px 10px;
  border: 1px solid #666;
  width: 200px;
  max-width: 200px;
  font-size: 16px;
`

export default function Search({ onSearch, value }) {
  return (
    <SearchStyled>
      <label htmlFor="filter">
        <i className="material-icons">search</i>
      </label>
      <InputStyled id="filter" value={value} onChange={onSearch} />
    </SearchStyled>
  )
}
