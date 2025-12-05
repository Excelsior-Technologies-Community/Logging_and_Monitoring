import React, { useEffect, useState } from "react";
import axios from "axios";
import LogTable from "../Components/LogTable";

const Dashboard = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/status");
        setStatus(res.data.status);
      } catch (err) {
        setStatus("Error fetching status");
        console.error(err);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div className="dashboard">
      <h1>Logging & Monitoring Dashboard</h1>
      <p
        className={`status-box ${
          status === "OK" ? "status-success" : "status-error"
        }`}
      >
        API Status: {status}
      </p>

      <LogTable />
    </div>
  );
};

export default Dashboard;
