import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://your-backend-url.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registered! Now login.");
        navigate("/");
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
