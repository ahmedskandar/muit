import ChartCard from "./ChartCard";
import GraphCard from "./GraphCard";
import InfoCard from "./InfoCard";

const DashboardData = () => {
  const list1 = [
    {
      id: 1,
      text1: "57862876",
      text2: "uygrguhgvd",
      text3: "cancel"
    },
    {
      id: 2,
      text1: "57862876",
      text2: "uygrguhgvd",
      text3: "cancel"
    },
    {
      id: 3,
      text1: "57862876",
      text2: "uygrguhgvd",
      text3: "cancel"
    }
  ];
  
  const list2 = [
    {
      id: 1,
      text1: "57862876",
      text2: "uygrguhgvd",
      text3: "cancel"
    },
    {
      id: 2,
      text1: "57862876",
      text2: "uygrguhgvd",
      text3: "cancel"
    },
    {
      id: 3,
      text1: "57862876",
      text2: "uygrguhgvd",
      text3: "cancel"
    }
  ];
  
  const list3 = [
    {
      id: 1,
      text1: "57862876",
      text2: "uygrguhgvd",
      text3: "cancel"
    },
    {
      id: 2,
      text1: "57862876",
      text2: "uygrguhgvd",
      text3: "cancel"
    },
    {
      id: 3,
      text1: "57862876",
      text2: "uygrguhgvd",
      text3: "cancel"
    }
  ];
 
  return (
    <div className="pt-60 max-w-[600px] w-[90%] mx-auto text-center lg:max-w-none">
      {/**InfoCards */}
      <section className="flex flex-col gap-5 lg:flex-row lg:justify-between xl:gap-7">
        <InfoCard heading={"Pending requests"} list={list1}/>
        <InfoCard heading={"Hold booking flights"} list={list2}/>
        <InfoCard heading={"Activities"} list={list3}/>
      </section>

      {/**ChartCards */}
      <section className="flex flex-col mt-7 gap-5 h-80 mb-5 lg:flex-row">
        <ChartCard />
        <GraphCard />
      </section>
    </div>
  );
};

export default DashboardData;
