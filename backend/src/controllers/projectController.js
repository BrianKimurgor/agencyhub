import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger.js';

const prisma = new PrismaClient();

/**
 * Creates a new project based on the provided request body.
 * @param {Object} req - The request object containing project information in the body.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the project is created.
 */
export const createProject = async (req, res) => {
    const { name, description, startDate, endDate } = req.body;
    try {
        const project = await prisma.project.create({
            data: {
                name,
                description,
                startDate: startDate ? new Date(startDate) : null,
                endDate: endDate ? new Date(endDate) : null
            }
        });
        logger.info(`${project} created`)
        res.status(201).json(project);
    } catch (error) {
        logger.error(`failed to create project`)
        res.status(400).json({ error: error.message });
    }
};


export const getProjects = async (req, res) => {
    try {
        const projects = await prisma.project.findMany()
        res.status(200).json(projects)
    } catch (error) {
        logger.error(`Error fetching projects: ${error.message}`);
        res.status(500).json({ error: 'Failed to fetch projects' });

    }
}
/**
 * Retrieves a project based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the project is retrieved.
 */
export const getProject = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await prisma.project.findUnique({
            where: { id: parseInt(id) }
        });
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        logger.error(`failed to get ${project}`)
        res.status(500).json({ error: error.message });
    }
};

/**
 * Updates a project based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the project is updated.
 */
export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, description, startDate, endDate } = req.body;
    try {
        const project = await prisma.project.update({
            where: { id: parseInt(id) },
            data: {
                name,
                description,
                startDate,
                endDate,
            }
        });
        logger.info(`${project} updated`)
        res.status(200).json(project);
    } catch (error) {
        logger.error(`failed to update ${project}`)
        res.status(400).json({ error: error.message });
    }
};

/**
 * Deletes a project based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the project is deleted.
 */
export const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.project.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
