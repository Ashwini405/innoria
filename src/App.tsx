import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';
import Landing from '@/pages/Landing';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Home from '@/pages/Home';
import AllMenu from '@/pages/AllMenu';
import ItemDetail from '@/pages/ItemDetail';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import Success from '@/pages/Success';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={isAuthenticated ? <Navigate to="/home" replace /> : <Landing />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />} />
      <Route path="/signup" element={isAuthenticated ? <Navigate to="/home" replace /> : <Signup />} />

      {/* Protected Routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-50">
              <Navbar />
              <Home />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/menu"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-50">
              <Navbar />
              <AllMenu />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/item/:id"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-50">
              <Navbar />
              <ItemDetail />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-50">
              <Navbar />
              <About />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-50">
              <Navbar />
              <Contact />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-50">
              <Navbar />
              <Cart />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-50">
              <Navbar />
              <Checkout />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/success"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-50">
              <Navbar />
              <Success />
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
