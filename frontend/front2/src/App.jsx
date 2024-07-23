import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompaniesPage from './pages/companiesPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import ProjectsPage from './pages/projectsPage';
import ResourcePage from './pages/resourcePage';
import ResourcesPage from './pages/resourcesPage';
import BrandingListPage from './pages/brandingListPage';
import BrandingFormPage from './pages/brandingFormPage';
import ClientsPage from './pages/clientsPage';
import ClientFormPage from './pages/clientFormPage';
import DashboardPage from './pages/dashboardPage';
import Layout from './components/layout/layout';
import Profile from './pages/profile/Profile';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<Layout />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resource" element={<ResourcePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/branding" element={<BrandingListPage />} />
            <Route path="/branding/new" element={<BrandingFormPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/clients/new" element={<ClientFormPage isEditing={false} />} />
            <Route path="/clients/edit" element={<ClientFormPage isEditing={true} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
