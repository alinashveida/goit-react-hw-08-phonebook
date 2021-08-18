import styled from '@emotion/styled'

export const ContactsList = styled.ul``

export const ContactItem = styled.li`
  margin-bottom: 10px;
  font-family: 'Comfortaa', cursive;
  font-size: 16px;
  color: #524f4e;
  font-weight: 600;
  margin-right: 15px;
  margin-left: 15px;
`
export const DeleteButton = styled.button`
  float: right;
  text-align: center;

  text-decoration: none;
  display: inline-block;
  padding-top: 3px;
  padding-bottom: 1px;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #f137a6 inset, 0 0 0 0 #f137a6;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: 0.15s ease-in-out;

  border: none;

  &:hover {
    box-shadow: 0 0 10px 0 #f137a6 inset, 0 0 10px 4px #f137a6;
    color: #f137a6;
    background: #a4dada;
  }
`
