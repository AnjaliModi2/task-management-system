import { useEffect, useState } from "react";
import axios from "axios";
import { getBasicAuth } from "../service/AuthApiService";

const AdminDashboard = () => {

  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/api/admin/stats", {
      headers: { Authorization: getBasicAuth() }
    })
    .then(res => {
      setStats(res.data);
    })
    .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <h3>Total Users: {stats.totalUsers}</h3>
      <h3>Total Tasks: {stats.totalTasks}</h3>
      <h3>Completed Tasks: {stats.completedTasks}</h3>
    </div>
  );
};

export default AdminDashboard;