import { useState, useEffect } from "react";

export default function IPLPointsTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        IPL 2022 Points Table
      </h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Rank</th>
            <th className="border p-2">Team</th>
            <th className="border p-2">Matches</th>
            <th className="border p-2">Won</th>
            <th className="border p-2">Lost</th>
            <th className="border p-2">NRR</th>
            <th className="border p-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{team.Team}</td>
              <td className="border p-2">{team.Matches}</td>
              <td className="border p-2">{team.Won}</td>
              <td className="border p-2">{team.Lost}</td>
              <td className="border p-2">{team.NRR.toFixed(3)}</td>
              <td className="border p-2">{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
