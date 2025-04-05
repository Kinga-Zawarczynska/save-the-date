'use client';

import { useState } from 'react';
import { WrapperWithBackground } from '../components/wrapper-with-bg';
import { FaArrowRightToBracket } from 'react-icons/fa6';

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
      window.location.href = '/';
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <WrapperWithBackground imgSrc={bgImg.src}>
      <form
        className="flex flex-col gap-6 items-center justify-center min-h-screen"
        onSubmit={handleSubmit}
      >
        <input
          className="border w-72 border-gray-300 rounded-md placeholder-gray-200 placeholder:font-bold bg-transparent text-white p-2 outline-none"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Wprowadź hasło"
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className="text-xl text-white" type="submit">
          <FaArrowRightToBracket />
        </button>
      </form>
    </WrapperWithBackground>
  );
}
