import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Creates a new performance record based on the provided request body.
 * @param {Object} req - The request object containing performance information in the body.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the performance record is created.
 */
export const createPerformance = async (req, res) => {
    const { agencyId, subAgencyId, projectId, revenue, clientSatisfaction, profitability } = req.body;
    try {
        const performance = await prisma.performance.create({
            data: {
                agencyId,
                subAgencyId,
                projectId,
                revenue,
                clientSatisfaction,
                profitability
            }
        });
        res.status(201).json(performance);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Retrieves a performance record based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the performance record is retrieved.
 */
export const getPerformance = async (req, res) => {
    const { id } = req.params;
    try {
        const performance = await prisma.performance.findUnique({
            where: { id: parseInt(id) }
        });
        if (!performance) {
            return res.status(404).json({ error: 'Performance record not found' });
        }
        res.status(200).json(performance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Updates a performance record based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the performance record is updated.
 */
export const updatePerformance = async (req, res) => {
    const { id } = req.params;
    const { agencyId, subAgencyId, projectId, revenue, clientSatisfaction, profitability } = req.body;
    try {
        const performance = await prisma.performance.update({
            where: { id: parseInt(id) },
            data: { agencyId, subAgencyId, projectId, revenue, clientSatisfaction, profitability }
        });
        res.status(200).json(performance);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Deletes a performance record based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the performance record is deleted.
 */
export const deletePerformance = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.performance.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
