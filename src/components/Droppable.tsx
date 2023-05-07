import { useDrop } from "react-dnd";
import { StyledDroppable } from "./Styled";
import { DroppableI } from "./types";

const Droppable: React.FC<DroppableI> = ({ onDrop, droppedBox }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: (item, monitor) => {
      onDrop(item);
    },
    collect: (monitor) => {
      return {
        isOver: !!monitor.isOver()
      };
    }
  }));

  return (
    <StyledDroppable ref={drop} isOver={isOver}>
      {droppedBox}
    </StyledDroppable>
  );
};

export default Droppable;
