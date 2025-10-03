// Main dashboard component
import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {
  const { user, profile, signOut } = useAuth()

  return (
    <div className="min-h-screen bg-charcoal">
      <nav className="bg-slate-blue shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">Knowtes</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, {profile?.name || user?.email}</span>
              <button
                onClick={signOut}
                className="text-electric-blue hover:text-cyber-lime transition-colors duration-200"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-600 rounded-lg h-96">
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
              <p className="text-gray-400 mt-2">
                Welcome to your Knowtes dashboard, {profile?.role || 'user'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
