import styled from '@emotion/styled'

export const Container = styled.div`
  display: 'flex';
  align-items: 'center';
`
// export const Avatar = styled.img`
//   margin-right: 4;
// `

export const Name = styled.span`
  font-weight: 700;
  margin-right: 16px;
  font-size: 20px;

  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  font-family: 'Comfortaa', cursive;

  color: black;
`
export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  margin: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #f137a6 inset, 0 0 0 0 #f137a6;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  -webkit-transition: 0.15s ease-in-out;
  transition: 0.15s ease-in-out;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px 0 #f137a6 inset, 0 0 10px 4px #f137a6;
    color: #f137a6;
    background: #a4dada;
  }
`
