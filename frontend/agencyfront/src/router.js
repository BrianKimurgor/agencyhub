// src/router.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import BrandingForm from './components/BrandingForm.jsx';
import BrandingDetails from './components/BrandingDetails.jsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/branding/new" element={<BrandingForm />} />
        <Route path="/branding/:id" element={<BrandingDetails />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
