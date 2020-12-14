import styled from "styled-components";

export const StyledSidebarItem = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 50px;
  color: white;
  justify-content: flex-start;
`;
