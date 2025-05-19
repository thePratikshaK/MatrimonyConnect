import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProfileList from './pages/ProfileList';
import ProfileDetail from './pages/ProfileDetail';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import EditProfile from './pages/EditProfile';
import MatchProfile from './pages/MatchProfile';
import './App.css';

// Create a wrapper component to handle header visibility
function AppContent() {
  const location = useLocation();
  const hideHeaderPaths = ['/', '/login', '/register', '/signup'];
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <div className="app">
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profiles"
          element={
            <PrivateRoute>
              <ProfileList />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <PrivateRoute>
              <ProfileDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route path="/match/:id" element={<MatchProfile />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
