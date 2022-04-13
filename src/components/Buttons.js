import styled from 'styled-components'

const DefaultButton = styled.button`
  background: #645cf6;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`

const HipsterButton = styled(DefaultButton)`
    width: 150px;
    background: transparent;
    color: #645cf6;
    border: solid 1px #645cf6;
    padding: 1rem;
    display: inline-block;
    margin-right: 1rem;

    text-decoration: none;
    text-align: center;
    font-size: 1rem
`

export { DefaultButton, HipsterButton }
