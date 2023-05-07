import { useDrag } from "react-dnd";
import { StyledDraggable } from "./Styled";
import { ItemI } from "../types";

const Draggable: React.FC<ItemI> = ({ label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { type: "box", label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <StyledDraggable ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {label}
    </StyledDraggable>
  );
};

export default Draggable;
