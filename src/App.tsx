import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";
import { GridContainer, Item, FourthItem } from "./Styled";
import { BoxT, ItemI } from "./types";

const App: React.FC = () => {
  const [droppedBox, setDroppedBox] = useState<BoxT>(
    "Waiting to drop something..."
  );

  const handleDrop = (item: ItemI) => {
    setDroppedBox(item.label);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <GridContainer>
        <Item>
          <Draggable label="Box 1" />
        </Item>
        <Item>
          <Draggable label="Box 2" />
        </Item>
        <Item>
          <Droppable onDrop={handleDrop} droppedBox={droppedBox} />
        </Item>
        <FourthItem>
          <div>Drop here!</div>
        </FourthItem>
      </GridContainer>
    </DndProvider>
  );
};

export default App;
