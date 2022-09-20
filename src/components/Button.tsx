import styled from "styled-components";
import { colors } from "../utils";

// export const Button = styled.button`
//   background: ${colors.themeColor};
//   border: none;
//   outline: none;
//   padding: 1rem 2rem;
//   color: white;
//   border-radius: 0.5rem;
//   font-size: 1.2rem;
//   font-weight: bold;
//   cursor: pointer;
//   width: 100%;
// `;

const ButtonContainer = styled.button<any>`
  -webkit-appearance: none;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background || colors.themeColor};
  width: ${(props) => props.width || "150px"};
  padding: ${(props) => props.padding || "1rem 2rem"};
  min-height: ${(props) => props.minHeight || null};
  min-width: ${(props) => props.minWidth || null};
  margin: ${(props) => props.margin || "0"};
  color: ${colors.white};
  font-size: 1.2rem;
  transition: all 0.3s;
  height: ${(props) => props.height || "40px"};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) =>
      props.background ? props.background : colors.themeColor};
  }

  @media screen and (max-width: 991px) {
    height: ${(props) => props.height || "35px"};
    font-size: 12px;
    width: ${(props) => props.width || "70px"};
  }

  @media screen and (max-width: 450px) {
    width: ${(props) => props.xswidth || null};
  }
`;

const Button: React.FC<any> = ({
  text,
  onClick,
  margin,
  type,
  width,
  loading,
  background,
  height,
  name,
  value,
  disabled,
  xswidth,
  padding,
  minWidth,
  minHeight,
}) => {
  return (
    <ButtonContainer
      background={background || null}
      type={type || null}
      onClick={onClick || null}
      margin={margin}
      width={width}
      xswidth={xswidth || ""}
      height={height}
      name={name || null}
      value={value || null}
      disabled={disabled || false}
      padding={padding}
      minWidth={minWidth}
      minHeight={minHeight}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
