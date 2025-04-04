'use client';
import { useState } from 'react';
import { WrapperWithBackground } from '../components/wrapper-with-bg';

import bgImg from '../../assets/6.jpg';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = '/'; // Redirect to home page
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <WrapperWithBackground imgSrc={bgImg.src}>
      <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1>Wprowadź hasło</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </WrapperWithBackground>
    
  );
}
