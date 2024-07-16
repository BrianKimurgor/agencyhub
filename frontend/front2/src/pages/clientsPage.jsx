/* eslint-disable no-unused-vars */
import React from 'react';
import ClientList from '../components/client/clientList';
import { useClient } from '../hooks/useClient';

const ClientsPage = () => {
  const {
    clientsList,
    handleEditClient,
    handleDeleteClient
  } = useClient();

  return (
    <ClientList
      clients={clientsList}
      handleEditClient={handleEditClient}
      handleDeleteClient={handleDeleteClient}
    />
  );
};

export default ClientsPage;
