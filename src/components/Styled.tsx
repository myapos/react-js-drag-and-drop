import styled from "styled-components";

export const StyledDraggable = styled.div`
  cursor: move;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const StyledDroppable = styled.div<{ isOver: boolean }>`
  border: 2px dashed gray;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ isOver }: { isOver: boolean }) =>
    isOver ? "lightgray" : "white"};
`;
