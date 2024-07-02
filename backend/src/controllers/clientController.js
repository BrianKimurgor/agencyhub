// src/controllers/clientController.js
import { getAllClients, getClientById } from '../services/clientService.js';

export const getAllClientss = async (req, res) => {
  const clients = await clientService.getAllClients();
  res.json(clients);
};

export const getClientByIds = async (req, res) => {
  const { id } = req.params;
  const client = await clientService.getClientById(id);
  res.json(client);
};
