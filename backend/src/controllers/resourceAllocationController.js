import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Creates a new resource allocation based on the provided request body.
 * @param {Object} req - The request object containing resource allocation information in the body.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the resource allocation is created.
 */
export const createResourceAllocation = async (req, res) => {
    const { projectId, budget } = req.body;
    try {
        const resourceAllocation = await prisma.resourceAllocation.create({
            data: {
                projectId,
                budget
            }
        });
        res.status(201).json(resourceAllocation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Fetches resource allocations from the database and returns them as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
export const getResourseAllocations = async (req, res) => {
    try {
        const resources = await prisma.resourceAllocation.findMany()
        res.status(200).json(resources)
    } catch (error) {
        logger.error(`Error fetching resourses: ${error.message}`);
        res.status(500).json({ error: 'Failed to fetch resourses' });

    }
}
/**
 * Retrieves a resource allocation based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the resource allocation is retrieved.
 */
export const getResourceAllocation = async (req, res) => {
    const { id } = req.params;
    try {
        const resourceAllocation = await prisma.resourceAllocation.findUnique({
            where: { id: parseInt(id) }
        });
        if (!resourceAllocation) {
            return res.status(404).json({ error: 'Resource Allocation not found' });
        }
        res.status(200).json(resourceAllocation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Updates a resource allocation based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the resource allocation is updated.
 */
export const updateResourceAllocation = async (req, res) => {
    const { id } = req.params;
    const { projectId, budget } = req.body;
    try {
        const resourceAllocation = await prisma.resourceAllocation.update({
            where: { id: parseInt(id) },
            data: { projectId, budget }
        });
        res.status(200).json(resourceAllocation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Deletes a resource allocation based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the resource allocation is deleted.
 */
export const deleteResourceAllocation = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.resourceAllocation.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
