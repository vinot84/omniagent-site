import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to your Dashboard</h1>
      <p className="text-lg text-gray-700 mb-8">This is where the magic will happen. Stay tuned!</p>
      <div className="space-x-4">
        <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
          <Link to="/">Back to Home</Link>
        </Button>
        <Button variant="outline">
          <Link to="/sign-in">Sign Out</Link>
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;