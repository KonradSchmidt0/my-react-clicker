// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white bg-slate-800"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to the Homepage</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        This is a simple React + Tailwind app. It utilizes separation of responsibilities, custom hooks and local routers
      </p>
      <Link to="/clicker" className="text-blue-400 underline text-lg">
        Go to Clicker Page
      </Link>
    </div>
  );
}