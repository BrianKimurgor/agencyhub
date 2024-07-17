import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger.js';


const prisma = new PrismaClient();


export const getBrandings = async (req, res) =>{
    try {
        const brands = await prisma.branding.findMany()
        res.status(200).json(brands)
    } catch (error) {
        logger.error(`Error fetching brands: ${error.message}`);
        res.status(500).json({ error: 'Failed to fetch brands' });
    }
}

/**
 * Creates a new branding record based on the provided request body.
 * @param {Object} req - The request object containing branding information in the body.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the branding record is created.
 */
export const createBranding = async (req, res) => {
    const { companyId, logoUrl, primaryColor, secondaryColor, welcomeText, footerText } = req.body;

    // Validate the request body
    if (!companyId || !logoUrl || !primaryColor || !secondaryColor) {
        return res.status(400).json({ error: 'companyId, logoUrl, primaryColor, and secondaryColor are required' });
    }

    try {
        const branding = await prisma.branding.create({
            data: {
                companyId,
                logoUrl,
                primaryColor,
                secondaryColor,
                welcomeText,
                footerText
            }
        });
        logger.info(`${branding.companyId} created`);
        res.status(201).json(branding);
    } catch (error) {
        logger.error(`Failed to create brand: ${error.message}`);
        res.status(400).json({ error: error.message });
    }
};

/**
 * Retrieves a branding record based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the branding record is retrieved.
 */
export const getBranding = async (req, res) => {
    const { id } = req.params;
    try {
        const branding = await prisma.branding.findUnique({
            where: { id: parseInt(id) }
        });
        if (!branding) {
            logger.error(`failed to find ${branding} record`)
            return res.status(404).json({ error: 'Branding record not found' });
        }
        res.status(200).json(branding);
    } catch (error) {
        logger.error(`failed to get:${id}`)
        res.status(500).json({ error: error.message });
    }
};

/**
 * Updates a branding record based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the branding record is updated.
 */
export const updateBranding = async (req, res) => {
    const { id } = req.params;
    const { companyId, logoUrl, primaryColor, secondaryColor, welcomeText, footerText } = req.body;
    try {
        const branding = await prisma.branding.update({
            where: { id: parseInt(id) },
            data: { companyId, logoUrl, primaryColor, secondaryColor, welcomeText, footerText }
        });
        logger.info(`${branding.id} updated`)
        res.status(200).json(branding);
    } catch (error) {
        logger.error(`failed to update ${branding} `)
        res.status(400).json({ error: error.message });
    }
};

/**
 * Deletes a branding record based on the provided ID from the request parameters.
 * @param {Object} req - The request object containing parameters.
 * @param {Object} res - The response object to send back the result.
 * @returns {Promise<void>} - A promise that resolves once the branding record is deleted.
 */
export const deleteBranding = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.branding.delete({
            where: { id: parseInt(id) }
        });
        logger.info(`${id} deleted`)
        res.status(204).send({success:`${id} deleted`});
    } catch (error) {
        logger.error(`the ${id} is unavailable`)
        res.status(500).json({ error: "the data is not available"});
    }
};
