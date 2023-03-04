import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 15px;
  padding: 15px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 25px;

  font-size: 15px;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  background-color: ${props => {
    switch (props.children) {
      case 'Good':
        return 'green';
      case 'Neutral':
        return '#ADD100';
      case 'Bad':
        return 'red';
      default:
        return 'white';
    }
  }};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
