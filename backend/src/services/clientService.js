// src/services/clientService.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllClients = async () => {
  return await prisma.client.findMany();
};

export const getClientById = async (id) => {
  return await prisma.client.findUnique({ where: { id: parseInt(id) } });
};
