import styled from "styled-components";

const NoDataWrapper = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #091322;
  position: relative;
  margin: auto;
`;

export const NoData = ({ message }: { message: string }) => {
  return <NoDataWrapper>{message}</NoDataWrapper>;
};
