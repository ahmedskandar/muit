import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const InfoCard2 = ({list}: any) => {
  return (
    <div className="bg-white shadow-md border rounded-lg text-left w-full hover:shadow-lg hover:scale-105 duration-200">
      <div
        className="p-2 font-bold text-white bg-gradient-to-b from-yellow-600 to-yellow-500
       rounded-t-lg flex items-center gap-4"
      >
        <h2>{list.heading}</h2>
        {/* <button>
          <NotificationsIcon />
          <sup className=" bg-red-500 rounded-full px-1 -ml-2.5">1</sup>
        </button> */}
      </div>
      <hr className="bg-black" />
      <table className="w-[90%] my-5 mx-auto">
        <tbody>
              <tr className="h-10">
                <td className="w-1/3">56ftgyubhh</td>
                <td className="w-1/3">abcdefg</td>
                <td className="w-1/3 text-center">cancel</td>
              </tr>
              <tr className="h-10">
                <td className="w-1/3">56ftgyubhh</td>
                <td className="w-1/3">abcdefg</td>
                <td className="w-1/3 text-center">cancel</td>
              </tr>
              <tr className="h-10">
                <td className="w-1/3">56ftgyubhh</td>
                <td className="w-1/3">abcdefg</td>
                <td className="w-1/3 text-center">cancel</td>
              </tr>
        </tbody>
      </table>
      <div className="flex justify-end text-sm mr-4 mb-4">
        <button className="bg-gradient-to-b from-yellow-600 to-yellow-500 flex items-center p-1 rounded-lg text-white ">
          View more
          <ArrowForwardIosIcon className="text-sm" />
        </button>
      </div>
    </div>
  );
}

export default InfoCard2