import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Test2: React.FC = () => {
  const finalSpaceCharacters = [
    {
      id: "gary",
      name: "Gary Goodspeed",
    },
    {
      id: "cato",
      name: "Little Cato",
    },
    {
      id: "kvn",
      name: "KVN",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-5 mt-5">
      <h1>Final Space Characters</h1>
      <DragDropContext>
        <Droppable direction="row" droppableId="characters">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-row  bg-purple-400 p-5"
            >
              {finalSpaceCharacters.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="bg-gray-400 p-4 rounded m-2"
                      >
                        <div>{name}</div>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Test2;
