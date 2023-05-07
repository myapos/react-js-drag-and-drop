import { BoxT } from "../types";

export interface DroppableI {
  onDrop: (item: any) => void;
  droppedBox: BoxT;
}
