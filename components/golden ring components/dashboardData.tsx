import ChartCard from "./ChartCard";
import GraphCard from "./GraphCard";
import InfoCard from "./InfoCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {useEffect, useState} from 'react'
const DashboardData = () => {

      const [winReady, setwinReady] = useState(false);
      useEffect(() => {
        setwinReady(true);
      }, []);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
  };
  const onDragStart = (result: any) => {
    const { source, destination } = result;
  };
  const onDragUpdate = (result: any) => {
    const { source, destination } = result;
  };

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
    <div className="pt-60 max-w-[600px] w-[90%] mx-auto text-center lg:max-w-none">
      {/**InfoCards */}
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
      >
        {winReady ? (
          <Droppable droppableId="row">
            {(droppableProvided) => (
              <section
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className="flex flex-col gap-5 lg:flex-row lg:justify-between xl:gap-7"
              >
                {lists.map((list, index) => (
                  <Draggable
                    key={list.id}
                    draggableId={list.id.toString()}
                    index={index}
                  >
                    {(draggableProvided, draggableSnapshot) => (
                      <div
                      className="w-full"
                        {...draggableProvided.dragHandleProps}
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                      >
                        <InfoCard list={list} key={list.id} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </section>
            )}
          </Droppable>
        ) : null}
      </DragDropContext>

      {/**ChartCards */}
      <section className="flex flex-col mt-7 gap-5 h-80 mb-5 lg:flex-row">
        <ChartCard />
        <GraphCard />
      </section>
    </div>
  );
};

export default DashboardData;
