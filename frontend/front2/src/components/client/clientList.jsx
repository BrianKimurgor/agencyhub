/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ClientList = ({ clients, handleEditClient, handleDeleteClient }) => {
  return (
    <div>
      <h2>Client List</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.name} - {client.email}
            <button onClick={() => handleEditClient(client)}>Edit</button>
            <button onClick={() => handleDeleteClient(client.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
