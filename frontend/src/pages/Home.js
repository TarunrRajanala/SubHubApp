import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

function Home() {
  const navigate = useNavigate();

  const handleDashboard = () => {
    if (isAuthenticated()) {
      navigate('/dashboard'); // Redirect to Dashboard if logged in
    } else {
      alert('Please log in first.');
    }
  };

  return (
    <div>
      <h1>Welcome to SubHub</h1>
      <p>Your go-to app for subletting apartments at UT Austin!</p>
      <div>
        <button onClick={() => navigate('/register')}>Register</button>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
      <div>
        <button onClick={handleDashboard}>Go to Dashboard</button>
      </div>
    </div>
  );
}

export default Home;
