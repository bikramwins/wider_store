import React from "react";
import styled from "styled-components";
import { colors } from "../utils";

function Badge({
  content = "",
  clean = false,
  glow = false,
  paid = false,
  late = false,
}) {
  return (
    <Div clean={clean} late={late} glow={glow} paid={paid}>
      {content}
    </Div>
  );
}

type DivProps = {
  clean: boolean;
  late: boolean;
  glow: boolean;
  paid: boolean;
};

const Div = styled.span<DivProps>`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${colors.themeColor};
  cursor: pointer;
  ${({ clean }) =>
    clean &&
    `background-color: transparent;
    border: 0.05rem solid ${colors.themeColor};
     color:${colors.themeColor};`}
  ${({ glow }) =>
    glow &&
    `
        font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weight:normal;
          background-color: rgba(109, 134, 245, 0.192);
        color:#2f233d;
    `}
    ${({ paid }) =>
    paid &&
    `
        background-color:#70e00041;
        color:#70e000;
    `}

${({ late }) =>
    late &&
    `
        background-color:#ff595e41;
        color:#ff595e;
    `}
`;

export default Badge;
