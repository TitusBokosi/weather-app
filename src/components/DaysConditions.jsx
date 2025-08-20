import { useState } from "react";

export const DaysConditions = ({ days }) => {
  const [daysTrim, setDaysTrim] = useState(days.slice(0, 8));
  return (
    <div className="data-table bg-black text-white w-full md:w-fit p-2 overflow-x-auto whitespace-nowrap rounded-2xl ">
      <table>
        <thead>
          <tr>
            <th className="text-left">Day</th>
            <th className="text-left">Condition</th>
            <th>Tempareture</th>
            <th>Wind speed</th>
            <th>Visibility</th>
            <th>Snow depth</th>
          </tr>
        </thead>
        <tbody className="break-words whitespace-normal">
          {daysTrim.map((day) => (
            <tr className="text-gray-400 ">
              <td className="whitespace-nowrap p-2 pr-5 pl-0 text-left">
                {daysTrim.indexOf(day) === 0
                  ? "Today"
                  : daysTrim.indexOf(day) === 1
                  ? "Tomorrow"
                  : day.datetime}
              </td>
              <td className="whitespace-nowrap text-left">{day.conditions}</td>
              <td>{day.temp}</td>
              <td>{day.windspeed}</td>
              <td>{day.visibility}</td>
              <td>{day.snowdepth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
