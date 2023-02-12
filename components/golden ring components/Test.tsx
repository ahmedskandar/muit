import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Test() {
   const [winReady, setwinReady] = useState(false);
   useEffect(() => {
     setwinReady(true);
   }, []);
  const [data, setData] = useState([
    {
      id: 1,
      text: "item1",
    },
    {
      id: 2,
      text: "item2",
    },
    {
      id: 3,
      text: "item3",
    },
  ]);

  const handleDragEnd = (result: any) => {
    console.log(result)
  }

  return (
    // Contanier div
    <div className="bg-yellow-500 w-[50%] h-[400px] mx-auto flex justify-center">
      {/*Area which drag grop occurs*/}
      <DragDropContext onDragEnd={handleDragEnd}>
        {/*Area that can be dropped into*/}
        {winReady ? <Droppable droppableId="list">
          {/*List*/}
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex gap-3 items-start"
            >
              {data.map((item, index) => {
                return (
                  //What can be dragged
                  <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="bg-cyan-500 my-4 p-2 px-4 rounded-lg">
                        {item.text}
                      </li>
                    )}
                  </Draggable>
                );
              })}
            </ul>
          )}
        </Droppable>: null}
      </DragDropContext>
    </div>
  );
}

export default Test;
