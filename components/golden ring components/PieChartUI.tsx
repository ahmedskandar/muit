import { Pie } from "react-chartjs-2"
import {useState} from 'react'

const PieChartUI: React.FC = () => {
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
        backgroundColor: ["red","green","blue"]
      },
    ],
  });

  return (
    <div className="shadow-md border rounded-lg text-left w-full  h-full
      lg:w-[40%]">
        <div className="p-2 font-bold text-white bg-gradient-to-b from-yellow-600 to-yellow-500
       rounded-t-lg flex items-center gap-4">
            Airline Sales
        </div>
        <div className="h-[85%] flex justify-center">

        <Pie data={userData} />
        </div>
    </div>
  )
}

export default PieChartUI