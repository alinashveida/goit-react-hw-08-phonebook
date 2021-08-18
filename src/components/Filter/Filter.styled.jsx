import styled from '@emotion/styled'

export const Label = styled.label`
  font-family: 'Comfortaa', cursive;
  font-size: 18px;
  color: #fff;

  // color: #524f4e;
  color: #f137a6;
  margin-right: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  transition: 0.2s linear;

  text-align: left;
`

export const Input = styled.input`
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;

  width: 400px;
  padding: 15px;
  border: 2px solid #eee;
  border: 0;
  border-bottom: 1px solid #eee;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;

  &:focus {
    border: 1px solid #f137a6;
    box-shadow: 0 0 20px 4px #f137a6;
    outline: none;
  }
`
