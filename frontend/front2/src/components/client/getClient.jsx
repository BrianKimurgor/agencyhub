import { useState, useEffect } from 'react';
import { clients } from '../services/clientService';

export const useClient = () => {
  const [clientsList, setClientsList] = useState([]);
  const [editingClient, setEditingClient] = useState(null);

  useEffect(() => {
    clients.getClients().then(data => setClientsList(data));
  }, []);

  const handleCreateClient = (formData) => {
    clients.createClient(formData).then(newClient => {
      setClientsList([...clientsList, newClient]);
    });
  };

  const handleUpdateClient = (formData) => {
    clients.updateClient({ ...formData, id: editingClient.id }).then(updatedClient => {
      setClientsList(clientsList.map(client => client.id === updatedClient.id ? updatedClient : client));
    });
  };

  const handleDeleteClient = (clientId) => {
    clients.deleteClient(clientId).then(() => {
      setClientsList(clientsList.filter(client => client.id !== clientId));
    });
  };

  const handleEditClient = (client) => {
    setEditingClient(client);
  };

  return {
    clientsList,
    editingClient,
    handleCreateClient,
    handleUpdateClient,
    handleDeleteClient,
    handleEditClient
  };
};
