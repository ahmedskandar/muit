import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InfoCard2 from "./InfoCard2";

const DashboardData2 = () => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  //   const [direction, setDirection] = useState<string>()

  //   useEffect(() => {
  //       if (typeof window !== "undefined") {
  //     setWindowWidth(window.innerWidth)
  //       }
  //   }, [window.innerWidth])

  let direction = windowWidth > 768 ? "horizontal" : "vertical";

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
  const [listsState, setListsState] = useState(lists);

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  const onDragEndHandler = (result: any) => {
    const items = Array.from(listsState);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setListsState(items);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEndHandler}>
        {winReady ? (
          <Droppable direction={direction} droppableId="characters">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex flex-col items-center w-full md:flex-row"
              >
                {listsState.map((list, index) => {
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
                          <InfoCard2 list={list} />
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
