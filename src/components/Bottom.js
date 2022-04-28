import { Link } from "react-router-dom";
import styled from "styled-components";

const SBottom = styled.div`
  font-size: 14px;
  a:hover {
    text-decoration: underline;
  }
`;

export const Bottom = ({ text, link, linkText }) => {
  return (
    <SBottom>
      {text} <Link to={link}>&nbsp;&nbsp;{linkText}</Link>
    </SBottom>
  );
};
