import './App.css';
import CompanyForm from './components/companies/companyForm';
import { companes } from './services/companyService';
import GetCompanyController from './components/companies/getCompany';
import BrandingForm from './components/branding/brandingForm';
import BrandingList from './components/branding/brandingList';
import ClientForm from './components/client/clientForm';
import ClientList from './components/client/clientList';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useClient } from './hooks/useClient';
import ProjectGrid from './components/projects/projectGrid';
import ResourceForm from './components/resourceAllocation/resourceForm';
import ResourceGrid from './components/resourceAllocation/resourceGrid';

import RegisterGrid from './services/registerService';
import LoginGrid from './services/loginService';

function App() {
  const [companies, setCompanies] = useState([]);
  const [editingCompany, setEditingCompany] = useState({
    id: 0,
    name: '',
    address: '',
    contactEmail: '',
    contactPhone: '',
    industry: ''
  });

  const {
    clientsList,
    setClientsList,
    editingClient,
    handleCreateClient,
    handleUpdateClient: updateClient,
    handleDeleteClient,
    handleEditClient: editClient
  } = useClient();

  useEffect(() => {
    companes.getCompanies().then(data => setCompanies(data));
  }, []);

  const handleCreateCompany = (formData) => {
    companes.createCompany(formData).then(newCompany => {
      setCompanies([...companies, newCompany]);
    });
  };

  const handleUpdateCompany = (formData) => {
    companes.updateCompany({ ...formData, id: editingCompany.id }).then(updatedCompany => {
      setCompanies(companies.map(company => company.id === updatedCompany.id ? updatedCompany : company));
    });
  };

  const handleDeleteCompany = (companyId) => {
    companes.deleteCompany(companyId).then(() => {
      setCompanies(companies.filter(company => company.id !== companyId));
    });
  };

  const handleEditCompany = (company) => {
    setEditingCompany(company);
    console.log(company);
  };

  const handleEditClient = (client) => {
    editClient(client);
  };

  const handleUpdateClient = (formData) => {
    updateClient(formData).then(updatedClient => {
      setClientsList(clientsList.map(client => client.id === updatedClient.id ? updatedClient : client));
    });
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/companies" element={
            <>
              <CompanyForm onSubmit={(formData) => handleCreateCompany(formData)} />
              <GetCompanyController
                handleEditCompany={(company) => handleEditCompany(company)}
                handleDeleteCompany={(id) => handleDeleteCompany(id)}
                handleUpdateCompany={(formData) => handleUpdateCompany(formData)}
                companies={companies}
              />
            </>
          } />
          <Route path="/login" element={<LoginGrid />} />
          <Route path="/register" element={<RegisterGrid />} />
          <Route path="/" element={<ProjectGrid />} />
          <Route path="/resource" element={<ResourceForm />} />
          <Route path="/resources" element={<ResourceGrid />} />
          <Route path="/branding" element={<BrandingList />} />
          <Route path="/branding/new" element={<BrandingForm />} />
          <Route path="/clients" element={<ClientList clients={clientsList} handleEditClient={handleEditClient} handleDeleteClient={handleDeleteClient} />} />
          <Route path="/clients/new" element={<ClientForm onSubmit={handleCreateClient} />} />
          <Route path="/clients/edit" element={<ClientForm onSubmit={handleUpdateClient} editingClient={editingClient} />} />
        </Routes>
      </div>

    </Router>


  );
}

export default App;
