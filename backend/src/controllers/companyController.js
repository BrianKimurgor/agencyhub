// backend/src/controllers/companyController.js

import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger.js'



const prisma = new PrismaClient()

// Create a new company
/**
 * Creates a new company based on the request body data.
 * Validates the request body using the validateCompany function.
 * If validation fails, returns a 400 status with the validation error message.
 * If successful, creates a new company using the provided data and returns it with a 201 status.
 * If an error occurs during the process, returns a 500 status with an error message.
 * @param {Object} req - The request object containing the company data in the body.
 * @param {Object} res - The response object to send back the result.
 */
export const createCompany = async (req, res) => {
    try {
        const { name, address, contactEmail, contactPhone, industry } = req.body;
        const newCompany = await prisma.company.create({
            data: { name, address, contactEmail, contactPhone, industry },
        });
        logger.info(`Company created: ${company.name}`);
        res.status(201).json(newCompany);
    } catch (error) {
        logger.error(`Error creating companies: ${error.message}`)
        res.status(500).json({ error: 'Failed to create company' });
    }
};

// Get all companies
/**
 * Retrieves a list of all companies from the database and sends it as a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const getCompanies = async (req, res) => {
    try {
        const companies = await prisma.company.findMany();

        res.status(200).json(companies);
    } catch (error) {
        logger.error(`Error fetching companies`)
        res.status(500).json({ error: 'Failed to fetch companies' });
    }
};

// Get a single company by ID
/**
 * Retrieves a company by its ID from the database and sends it as a JSON response.
 * @param {Object} req - The request object containing the company ID in the parameters.
 * @param {Object} res - The response object used to send the company data or error response.
 * @returns {Promise<void>} - A promise that resolves once the company data is sent or an error response is sent.
 */
export const getCompanyById = async (req, res) => {
    try {
        const { id } = req.params;
        const company = await prisma.company.findUnique({ where: { id: Number(id) } });
        if (company) {
            logger.info(`success:${company}`)
            res.status(200).json(company);
        } else {
            logger.error(`No compny with name: ${company}`)
            res.status(404).json({ error: 'Company not found' });
        }
    } catch (error) {
        logger.error(`faied to fetch ${company}`)
        res.status(500).json({ error: 'Failed to fetch company' });
    }
};

// Update a company
/**
 * Updates a company in the database by its ID using the provided data and sends the updated company as a JSON response.
 * @param {Object} req - The request object containing the company ID in the parameters and company data in the body.
 * @param {Object} res - The response object used to send the updated company data or error response.
 * @returns {Promise<void>} - A promise that resolves once the updated company data is sent or an error response is sent.
 */
export const updateCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, contactEmail, contactPhone, industry } = req.body;
        const updatedCompany = await prisma.company.update({
            where: { id: Number(id) },
            data: { name, address, contactEmail, contactPhone, industry },
        });
        logger.info(`${company} updated`)
        res.status(200).json(updatedCompany);
    } catch (error) {
        logger.error(`faied to update ${company}`)
        res.status(500).json({ error: 'Failed to update company' });
    }
};

// Delete a company
/**
 * Deletes a company from the database based on the provided company ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
export const deleteCompany = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.company.delete({ where: { id: Number(id) } });
        logger.info(`${company} deleted`)
        res.status(204).end();
    } catch (error) {
        logger.error(`faied to delete ${company}`)
        res.status(500).json({ error: 'Failed to delete company' });
    }
};
