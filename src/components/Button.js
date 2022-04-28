import styled from "styled-components";

const SButton = styled.button`
  all: unset;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: salmon;
  color: white;
  font-weight: 700;
  box-sizing: border-box;
  margin: 30px 0;
  opacity: ${(props) => props.opacity};
`;

export const Button = ({ opacity, text }) => {
  return <SButton opacity={opacity}>{text}</SButton>;
};
