import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) navigate("/");
  }, [navigate]);

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <p>You are now logged in!</p>
    </div>
  );
};

export default Dashboard;
