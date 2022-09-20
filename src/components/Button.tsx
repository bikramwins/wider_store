import styled from "styled-components";
import { colors } from "../utils";

export const Button = styled.button`
  background: ${colors.themeColor};
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
`;
