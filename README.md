# react-js-drag-and-drop
Created with CodeSandbox

# React Drag and Drop Example

## Getting Started
To get started, clone the repository and install the dependencies:


```
git clone https://github.com/YOUR-USERNAME/react-drag-and-drop-example.git
cd react-drag-and-drop-example
npm install
```

## Usage

To run the example, use the following command:

```
npm start
```

This will start the development server and open the example application in your browser at http://localhost:3000.

## Implementation Details
The example consists of two components: Draggable and Droppable. The Draggable component is a simple box that can be dragged and dropped onto the Droppable component. The Droppable component is a container that accepts dropped Draggable components.

The drag and drop functionality is implemented using the useDrag and useDrop hooks from the react-dnd library. The useDrag hook is used in the Draggable component to define what data should be passed when the component is dropped. The useDrop hook is used in the Droppable component to handle the dropped data and update the UI accordingly.

## Technologies Used

- React
- TypeScript
- Styled Components
- React DnD


## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/myapos/react-js-drag-and-drop/blob/master/LICENSE.md) file for details.


Link: https://codesandbox.io/p/github/myapos/react-js-drag-and-drop
