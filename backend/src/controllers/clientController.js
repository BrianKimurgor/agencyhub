import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger.js';
const prisma = new PrismaClient();

/**
 * Creates a new client based on the provided request body.
 * @param {Object} req - The request object containing client information in the body.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the client is created.
 */
export const createClient = async (req, res) => {
    const { name, email, phone, address, companyId } = req.body;
    try {
        const client = await prisma.client.create({
            data: {
                name,
                email,
                phone,
                address,
                companyId
            }
        });
        logger.info(`${client.name} created`);
        res.status(201).json(client);
    } catch (error) {
        logger.error(`failed to create: ${error}`);
        res.status(400).json({ error: error.message });
    }
};

/**
 * Retrieves a client based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the client is retrieved.
 */
export const getClient = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await prisma.client.findUnique({
            where: { id: parseInt(id) }
        });
        if (!client) {
            logger.error(`failed to find ${id} record`);
            return res.status(404).json({ error: 'Client not found' });
        }
        res.status(200).json(client);
    } catch (error) {
        logger.error(`failed to get: ${error}`);
        res.status(500).json({ error: error.message });
    }
};

/**
 * Updates a client based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the client is updated.
 */
export const updateClient = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address, companyId } = req.body;
    try {
        const client = await prisma.client.update({
            where: { id: parseInt(id) },
            data: { name, email, phone, address, companyId }
        });
        logger.info(`${client.name} updated`);
        res.status(200).json(client);
    } catch (error) {
        logger.error(`failed to update: ${error}`);
        res.status(400).json({ error: error.message });
    }
};

/**
 * Deletes a client based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the client is deleted.
 */
export const deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.client.delete({
            where: { id: parseInt(id) }
        });
        logger.info(`${client.name} deleted`)
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: `cannot find ${id}`});
    }
};
