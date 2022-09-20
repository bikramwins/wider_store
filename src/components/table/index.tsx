import styled from "styled-components";
export const ACTION_ICONS = {
  VIEW: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
    </svg>
  ),
  EDIT: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
    </svg>
  ),
  DELETE: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
    </svg>
  ),
};

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #686f7a;
  tbody:before {
    content: "-";
    display: block;
    line-height: 0.6em;
    color: transparent;
  }
`;

export const THead = styled.thead`
  background-color: #08c9ff;
  color: white;
  font-weight: 400;
  opacity: 0.65;
  text-align: left; 
  height: 40px;
}
`;
export const TFoot = styled.tfoot`
  // custom css goes here
`;

export const TBody = styled.tbody`
  // custom css goes here
`;

export const TR = styled.tr`
  border-bottom: 2px solid #e6e4ff;
  height: 70px;
`;

export const TH = styled.th`
  padding-left: 10px;
}
`;

export const TD = styled.td`
  // custom css goes here
  padding-left: 10px;
`;

export const IconContainer = styled.div<any>`
  height: 20px;
  width: 20px;
  display: inline-block;
  margin-right: 4px;
  cursor: pointer;
  svg {
    path {
      fill: ${(props: any) => props.fillColor || "#08c9ff"};
    }
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 20px 25px -5px,
    rgb(0 0 0 / 4%) 0px 10px 10px -5px;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  margin: 12px;
`;

interface ITABLE {
  children?: JSX.Element[];
  rest?: any;
}

export const Table: any = ({ children, ...rest }: ITABLE) => {
  return <StyledTable {...rest}>{children}</StyledTable>;
};

Table.Head = ({ children, ...rest }: ITABLE) => {
  return <THead {...rest}>{children}</THead>;
};

Table.Body = ({ children, ...rest }: ITABLE) => {
  return <TBody {...rest}>{children}</TBody>;
};

Table.Foot = ({ children, ...rest }: ITABLE) => {
  return <TFoot {...rest}>{children}</TFoot>;
};

Table.TH = ({ children, ...rest }: ITABLE) => {
  return <TH {...rest}>{children}</TH>;
};

Table.TR = ({ children, ...rest }: ITABLE) => {
  return <TR {...rest}>{children}</TR>;
};

Table.TD = ({ children, ...rest }: ITABLE) => {
  return <TD {...rest}>{children}</TD>;
};
