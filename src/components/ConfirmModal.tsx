import React from "react";
import styled from "styled-components";
import { colors } from "../utils";
import Button from "./Button";

const Container = styled.div`
  padding: 0px 20px;
  width: clamp(50px, 30vw, 700px);
  @media screen and (max-width: 991px) {
    width: clamp(50px, 70vw, 700px);
  }
`;

const ButtonContainer = styled.div<any>`
  margin: 20px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: ${(props) => (props.height ? props.height : "auto")};
  align-items: center;
  ${(props) => (props.noBorder ? null : ` border: 1px solid ${colors.grey5}`)};
  border-radius: 7px;
  min-height: 40px;
  justify-content: space-around;
  @media screen and (max-width: 767px) {
    margin: 10px 0px;
  }
`;

const ConfirmModal: React.FC<any> = ({
  header,
  noDelete,
  info,
  close,
  onConfirm,
  loading,
}) => {
  return (
    <Container>
      <h2
        style={{
          padding: "15px",
          textAlign: "center",
          fontWeight: "500",
          fontSize: "1.4rem",
        }}
      >
        {header || "Are you sure to delete?"}{" "}
      </h2>
      {info && (
        <p style={{ fontSize: "1.2rem", textAlign: "center" }}>{info}</p>
      )}
      <ButtonContainer noBorder>
        <Button
          background="grey"
          margin="0px 40px"
          text="Cancel"
          onClick={() => close()}
          type="button"
        />
        <Button
          background={noDelete ? colors.themeColor : "red"}
          margin="0px 40px"
          text="Confirm"
          onClick={() => onConfirm()}
          loading={loading}
          type="button"
        />
      </ButtonContainer>
    </Container>
  );
};

export default ConfirmModal;
