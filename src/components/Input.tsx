import styled from "styled-components";
import { colors } from "../utils";

const InputContainer = styled.div<any>`
  width: ${(props: any) => props.width};
`;

const FooterStyle = styled.div`
  font-size: 1.2rem;
  margin-top: 10px;
  color: ${colors.grey3};
`;

const HeaderStyle = styled.div<any>`
  font-size: 1.2rem;
  color: ${colors.grey3};
  margin: ${(props: any) =>
    props.top ? "0px 0px 10px 0px" : "30px 0px 10px 0px"};
`;

const InputStyle = styled.input<any>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: 0px 10px;
  border-radius: ${(props: any) => props.radius || "5px"};
  background: ${colors.white};
  border: 1px solid ${colors.grey5};
  box-sizing: border-box;

  &:focus {
    border: 1px solid ${colors.grey5};
  }
`;

const TextAreaStyle = styled.textarea<any>`
  width: ${(props) => props.width};
  padding: 10px;
  border-radius: 5px;
  background: ${colors.white};
  border: 1px solid ${colors.grey5};
  height: 120px;
  font-family: "Poppins", sans-serif !important;
  box-sizing: border-box;
`;

const DollarLabel = styled.div`
  background: ${colors.grey5};
  color: ${colors.grey3};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1.4rem;
  height: 40px;
  width: 25px;
  border-radius: 5px 0px 0px 5px;
`;

const Input: React.FC<any> = ({
  width,
  header,
  footer,
  type,
  placeholder,
  value,
  onChange,
  top,
  required,
  minLength,
  height,
  name,
  maxLength,
  readOnly,
  tooltip,
}) => {
  return (
    <InputContainer width={width || "400px"}>
      {header && <HeaderStyle top={top}>{header}</HeaderStyle>}
      <InputStyle
        height={height || "40px"}
        width={width || "400px"}
        name={name}
        type={type || "text"}
        placeholder={placeholder || ""}
        value={value || ""}
        onChange={onChange || null}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        readOnly={readOnly || null}
      />
      {footer && <FooterStyle>{footer}</FooterStyle>}
    </InputContainer>
  );
};

export const TextAreaInput: React.FC<any> = ({
  width,
  header,
  footer,
  type,
  placeholder,
  value,
  name,
  onChange,
  top,
  required,
  minLength,
  note,
}) => {
  return (
    <InputContainer>
      {header && <HeaderStyle top={top}>{header}</HeaderStyle>}
      <TextAreaStyle
        width={width || "400px"}
        name={name}
        type={type || "text"}
        placeholder={placeholder || ""}
        value={value || ""}
        onChange={onChange || null}
        required={required}
        minLength={minLength}
      />
      {footer && <FooterStyle>{footer}</FooterStyle>}
      {note && <FooterStyle>{note}</FooterStyle>}
    </InputContainer>
  );
};

const Flex = styled.div<any>`
  display: flex;
  align-items: center;
`;

export const MoneyInput: React.FC<any> = ({
  height,
  width,
  header,
  footer,
  type,
  name,
  placeholder,
  value,
  onChange,
  top,
  required,
}) => {
  return (
    <InputContainer>
      {header && <HeaderStyle top={top}>{header}</HeaderStyle>}
      <Flex align="center">
        <DollarLabel>$</DollarLabel>
        <InputStyle
          height={height || "40px"}
          width={width || "fit-content"}
          type={type || "text"}
          placeholder={placeholder || ""}
          name={name}
          value={value || ""}
          onChange={onChange || null}
          required={required}
          radius="0px 5px 5px 0px"
        />
      </Flex>
      {footer && <FooterStyle>{footer}</FooterStyle>}
    </InputContainer>
  );
};

export default Input;
