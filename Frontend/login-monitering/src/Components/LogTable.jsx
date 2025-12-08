import React, { useEffect, useState } from "react";
import axios from "axios";

const LogTable = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/logs/combined.log", {
          responseType: "text",
        });
        
        const parsedLogs = res.data
          .trim()
          .split("\n")
          .map((line) => {
            try {
              return JSON.parse(line);
            } catch (e) {
              return null;
            }
          })
          .filter((log) => log !== null)
          .reverse();

        setLogs(parsedLogs);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="log-table">
      <h2>API Logs History</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th>Level</th>
            <th>Message / Method</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx}>
              {/* Level (Info/Error) */}
              <td style={{ color: log.level === "error" ? "red" : "green", fontWeight: "bold" }}>
                {log.level.toUpperCase()}
              </td>
              
              {/* Message */}
              <td>{log.message}</td>

              {/* Timestamp if available (optional) */}
              <td>
                 {log.timestamp ? log.timestamp : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogTable;
