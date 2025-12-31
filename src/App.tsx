import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Trains from './pages/Trains';
import Buses from './pages/Buses';
import Cabs from './pages/Cabs';
import Packages from './pages/Packages';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Payment from './pages/Payment';
import BookingSuccess from './pages/BookingSuccess';
import { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
  requireAdmin?: boolean;
};

/**
 * Minimal inline ProtectedRoute placeholder:
 * - Renders children as-is so the app compiles.
 * - Replace the body with your actual auth logic (using AuthContext or similar)
 *   to enforce authentication and admin-only access.
 */
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/trains" element={<Trains />} />
            <Route path="/buses" element={<Buses />} />
            <Route path="/cabs" element={<Cabs />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/booking-success"
              element={
                <ProtectedRoute>
                  <BookingSuccess />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
