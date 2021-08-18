import styled from '@emotion/styled'

export const Form = styled.form`
  & input {
    display: block;
    margin-bottom: 12px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Label = styled.label`
  font-family: 'Comfortaa', cursive;
  font-size: 18px;
  color: #f137a6;
  margin-right: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
`

export const Input = styled.input`
  width: 400px;
  padding: 15px;
  border: 2px solid #eee;
  border: 0;
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  margin-top: 10px;

  &:focus {
    border: 1px solid #f137a6;
    box-shadow: 0 0 20px 4px #f137a6;
    outline: none;
  }
`

export const ButtomSubmit = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 15px 30px;
  margin: 10px 50px;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #f137a6 inset, 0 0 0 0 #f137a6;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  transition: 0.15s ease-in-out;

  border: none;

  margin-left: 32%;

  &:hover {
    box-shadow: 0 0 10px 0 #f137a6 inset, 0 0 10px 4px #f137a6;
    color: #f137a6;
    background: #a4dada;
  }
`
