import './App.css'
import CompanyForm from './components/companies/companyForm'
import { companes } from './services/companyService'
import GetCompanyController from './components/companies/getCompany'
import { useEffect, useState } from 'react'



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
    console.log(company)
  };

  return (
    <>
      <CompanyForm onSubmit={(formData) => handleCreateCompany(formData)} />
      <GetCompanyController handleEditCompany={(company)=>handleEditCompany(company)} handleDeleteCompany={(id)=> handleDeleteCompany(id)} handleUpdateCompany={(formData) => handleUpdateCompany(formData)} companies={companies} />
    </>
  )
}

export default App
