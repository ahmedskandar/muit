import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InfoCard2 from "./InfoCard2";

const DashboardData2 = () => {
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

  return (
    <div>
      <DragDropContext>
        <Droppable direction="row" droppableId="characters">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-row w-full"
            >
              {lists.map((list, index) => {
                return (
                  <Draggable
                    key={list.id}
                    draggableId={list.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div className="w-full m-5"
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
      </DragDropContext>
    </div>
  );
};

export default DashboardData2;
