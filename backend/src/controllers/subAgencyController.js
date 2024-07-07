import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Creates a new sub-agency based on the provided request body.
 * @param {Object} req - The request object containing sub-agency information in the body.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the sub-agency is created.
 */
export const createSubAgency = async (req, res) => {
    const { name, parentAgencyId } = req.body;
    try {
        const subAgency = await prisma.subAgency.create({
            data: {
                name,
                parentAgencyId
            }
        });
        res.status(201).json(subAgency);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Retrieves a sub-agency based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the sub-agency is retrieved.
 */
export const getSubAgency = async (req, res) => {
    const { id } = req.params;
    try {
        const subAgency = await prisma.subAgency.findUnique({
            where: { id: parseInt(id) }
        });
        if (!subAgency) {
            return res.status(404).json({ error: 'Sub-Agency not found' });
        }
        res.status(200).json(subAgency);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Updates a sub-agency based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the sub-agency is updated.
 */
export const updateSubAgency = async (req, res) => {
    const { id } = req.params;
    const { name, parentAgencyId } = req.body;
    try {
        const subAgency = await prisma.subAgency.update({
            where: { id: parseInt(id) },
            data: { name, parentAgencyId }
        });
        res.status(200).json(subAgency);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Deletes a sub-agency based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the sub-agency is deleted.
 */
export const deleteSubAgency = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.subAgency.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
