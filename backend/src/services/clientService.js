// src/services/clientService.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


/**
 * Retrieves all clients from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of client objects.
 */
export const getAllClients = async () => {
  return await prisma.client.findMany();
};


/**
 * Retrieves a client from the database by its ID.
 * @param {number} id - The ID of the client to retrieve.
 * @returns {Promise<object>} A promise that resolves to the client object.
 */
export const getClientById = async (id) => {
  return await prisma.client.findUnique({ where: { id: parseInt(id) } });
};
