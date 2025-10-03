// Main App component with routing
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import Dashboard from './components/Dashboard'

const AppContent = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-charcoal">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <Routes>
      <Route
        path="/signup"
        element={!user ? <SignUp /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/signin"
        element={!user ? <SignIn /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/signin" />}
      />
      <Route
        path="*"
        element={<Navigate to={user ? "/dashboard" : "/signin"} />}
      />
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AppContent />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
