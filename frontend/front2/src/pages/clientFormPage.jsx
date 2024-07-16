/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ClientForm from '../components/client/clientForm';
import { useClient } from '../hooks/useClient';

const ClientFormPage = ({ isEditing }) => {
  const {
    editingClient,
    handleCreateClient,
    handleUpdateClient
  } = useClient();

  return (
    <ClientForm
      onSubmit={isEditing ? handleUpdateClient : handleCreateClient}
      editingClient={isEditing ? editingClient : null}
    />
  );
};

export default ClientFormPage;
