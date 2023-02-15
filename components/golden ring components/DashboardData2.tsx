import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CarouselUI from "./CarouselUI";
import ChartCard from "./PieChartUI";
import GraphCard from "./BarChartUI";
import InfoCard2 from "./InfoCard2";
import PieChartUI from "./PieChartUI";
import BarChartUI from "./BarChartUI";

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

  let direction = windowWidth! > 768 ? "horizontal" : "vertical";

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
    if (!result.destination) return;
    const items = Array.from(listsState);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setListsState(items);
  };

  return (
    <>
      <CarouselUI />
      <div>
        <DragDropContext onDragEnd={onDragEndHandler}>
          {winReady ? (
            <Droppable direction={direction} droppableId="characters">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex flex-col items-center w-[90%] mx-auto md:flex-row"
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
                            className="w-[100%] my-5 md:w-[100%] md:w-full md:my-5 md:mr-5"
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
      {/**ChartCards */}
      <section className="flex flex-col w-[90%] mx-auto mt-7 gap-5 h-80 mb-5 lg:flex-row">
        <PieChartUI />
        <BarChartUI />
      </section>
    </>
  );
};

export default DashboardData2;
