import React, { useEffect, useState } from "react";
import axios from "axios";

const LogTable = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/logs/combined.log", {
          responseType: "text", // important for text file
        });
        const logLines = res.data.split("\n").reverse();
        setLogs(logLines);
      } catch (err) {
        setLogs(["Error fetching logs"]);
        console.error(err);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="log-table">
      <h2>API Logs</h2>
      <ul>
        {logs.map((log, idx) => (
          <li key={idx}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogTable;
