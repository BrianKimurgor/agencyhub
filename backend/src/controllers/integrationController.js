import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger.js'; // Importing the logger module
const prisma = new PrismaClient();

/**
 * Creates a new integration record based on the provided request body.
 * @param {Object} req - The request object containing integration information in the body.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the integration record is created.
 */
export const createIntegration = async (req, res) => {
    const { agencyId, type, settings } = req.body;
    try {
        const integration = await prisma.integration.create({
            data: {
                agencyId,
                type,
                settings: JSON.parse(settings) // Assuming settings is sent as a JSON string
            }
        });
        logger.info(`${integration} created`); // Using logger to log the creation
        res.status(201).json(integration);
    } catch (error) {
        logger.error(`failed to create: ${error}`); // Using logger to log the error
        res.status(400).json({ error: error.message });
    }
};

/**
 * Retrieves an integration record based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the integration record is retrieved.
 */
export const getIntegration = async (req, res) => {
    const { id } = req.params;
    try {
        const integration = await prisma.integration.findUnique({
            where: { id: parseInt(id) }
        });
        if (!integration) {
            logger.error(`failed to find ${id} record`); // Using logger to log the error
            return res.status(404).json({ error: 'Integration record not found' });
        }
        res.status(200).json(integration);
    } catch (error) {
        logger.error(`failed to get: ${error}`); // Using logger to log the error
        res.status(500).json({ error: error.message });
    }
};

/**
 * Updates an integration record based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the integration record is updated.
 */
export const updateIntegration = async (req, res) => {
    const { id } = req.params;
    const { agencyId, type, settings } = req.body;
    try {
        const integration = await prisma.integration.update({
            where: { id: parseInt(id) },
            data: { agencyId, type, settings: JSON.parse(settings) } // Assuming settings is sent as a JSON string
        });
        logger.info(`${integration} updated`); // Using logger to log the update
        res.status(200).json(integration);
    } catch (error) {
        logger.error(`failed to update: ${error}`); // Using logger to log the error
        res.status(400).json({ error: error.message });
    }
};

/**
 * Deletes an integration record based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the integration record is deleted.
 */
export const deleteIntegration = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.integration.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
