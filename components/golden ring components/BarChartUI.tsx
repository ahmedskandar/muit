import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js"; 
import Chart from "chart.js/auto";

const BarChartUI: React.FC = () => {
  
Chart.register(CategoryScale);

  const UserData = [
    {
      id: 1, 
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2, 
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3, 
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
  ]

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["gray"]
      },
    ],
  });


  

  return (
    <div
      className="shadow-md border rounded-lg text-left h-full
    w-full lg:w-[60%]"
    >
      <div
        className="p-2 font-bold text-white bg-gradient-to-b from-yellow-600 to-yellow-500
       rounded-t-lg flex items-center gap-4"
      >
        Weekly Sale Comparison
      </div>
      <div className="m-5 h-[80%]">
      <Bar data={userData} />

      </div>
    </div>
  );
};

export default BarChartUI;
