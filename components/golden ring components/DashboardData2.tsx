import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InfoCard2 from "./InfoCard2";

const DashboardData2 = () => {
  const [windowWidth, setWindowWidth] = useState<number>();
  const [direction, setDirection] = useState<string>()
  
  
  useEffect(() => {
      if (typeof window !== "undefined") {
    setWindowWidth(window.innerWidth)
  if(windowWidth !== undefined && windowWidth < 768){
        setDirection("column")
        
    } else {
        setDirection("row")
    }
  };
  }, [])


  

console.log(direction)

  const lists = [
    {
      id: 1,
      heading: "heading1",
      rows: [
        { text1: "57862876", text2: "uygrguhgvd", text3: "cancel" },
        { text1: "57862876", text2: "uygrguhgvd", text3: "cancel" },
        { text1: "57862876", text2: "uygrguhgvd", text3: "cancel" },
      ],
    },
    {
      id: 2,
      heading: "heading2",
      rows: [
        { text1: "57862876", text2: "uygrguhgvd", text3: "cancel" },
        { text1: "57862876", text2: "uygrguhgvd", text3: "cancel" },
        { text1: "57862876", text2: "uygrguhgvd", text3: "cancel" },
      ],
    },
    {
      id: 3,
      heading: "heading3",
      rows: [
        { text1: "57862876", text2: "uygrguhgvd", text3: "cancel" },
        { text1: "57862876", text2: "uygrguhgvd", text3: "cancel" },
        { text1: "57862876", text2: "uygrguhgvd", text3: "cancel" },
      ],
    },
  ];

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  return (
    <div>
      <DragDropContext>
        {winReady ? (
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex flex-col items-center w-full md:flex-row"
              >
                {lists.map((list, index) => {
                  return (
                    <Draggable
                      key={list.id}
                      draggableId={list.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="w-[90%] my-5 md:w-full md:m-5"
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <InfoCard2 />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        ) : null}
      </DragDropContext>
    </div>
  );
};

export default DashboardData2;
