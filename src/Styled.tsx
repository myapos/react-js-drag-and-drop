import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 5px;
  grid-column-gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div`
  text-align: center;
`;

export const FourthItem = styled(Item)`
  grid-row-start: 2;
  grid-column-start: 3;
`;
