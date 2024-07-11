import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger.js';

const prisma = new PrismaClient();

/**
 * Create a new company
 * @param {Object} req - The request object
 * @param {Object} req.body - The request body
 * @param {string} req.body.name - The name of the company
 * @param {string} req.body.address - The address of the company
 * @param {string} req.body.contactEmail - The contact email of the company
 * @param {string} req.body.contactPhone - The contact phone number of the company
 * @param {string} req.body.industry - The industry of the company
 * @param {Object} res - The response object
 */
export const createCompany = async (req, res) => {
    try {
        const { name, address, contactEmail, contactPhone, industry } = req.body;
        const newCompany = await prisma.company.create({
            data: { name, address, contactEmail, contactPhone, industry },
        });
        logger.info(`Company created: ${newCompany.name}`);
        res.status(201).json(newCompany);
    } catch (error) {
        logger.error(`Error creating company: ${error.message}`);
        res.status(500).json({ error: 'Failed to create company' });
    }
};

/**
 * Get all companies
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const getCompanies = async (req, res) => {
    try {
        const companies = await prisma.company.findMany();
        res.status(200).json(companies);
    } catch (error) {
        logger.error(`Error fetching companies: ${error.message}`);
        res.status(500).json({ error: 'Failed to fetch companies' });
    }
};

/**
 * Get a single company by ID
 * @param {Object} req - The request object
 * @param {Object} req.params - The request parameters
 * @param {string} req.params.id - The ID of the company
 * @param {Object} res - The response object
 */
export const getCompanyById = async (req, res) => {
    try {
        const { id } = req.params;
        const company = await prisma.company.findUnique({ where: { id: Number(id) } });
        if (company) {
            logger.info(`Company found: ${company.name}`);
            res.status(200).json(company);
        } else {
            logger.error(`Company not found with ID: ${id}`);
            res.status(404).json({ error: 'Company not found' });
        }
    } catch (error) {
        logger.error(`Error fetching company with ID ${req.params.id}: ${error.message}`);
        res.status(500).json({ error: 'Failed to fetch company' });
    }
};

/**
 * Update a company
 * @param {Object} req - The request object
 * @param {Object} req.params - The request parameters
 * @param {string} req.params.id - The ID of the company
 * @param {Object} req.body - The request body
 * @param {string} req.body.name - The name of the company
 * @param {string} req.body.address - The address of the company
 * @param {string} req.body.contactEmail - The contact email of the company
 * @param {string} req.body.contactPhone - The contact phone number of the company
 * @param {string} req.body.industry - The industry of the company
 * @param {Object} res - The response object
 */
export const updateCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, contactEmail, contactPhone, industry } = req.body;

        const updatedCompany = await prisma.company.update({
            where: { id: Number(id) },
            data: { name, address, contactEmail, contactPhone, industry },
        });

        logger.info(`Company with ID ${id} updated successfully`);
        res.status(200).json(updatedCompany);
    } catch (error) {
        logger.error(`Failed to update company with ID ${req.params.id}: ${error.message}`);
        res.status(500).json({ error: 'Failed to update company' });
    }
};

/**
 * Delete a company
 * @param {Object} req - The request object
 * @param {Object} req.params - The request parameters
 * @param {string} req.params.id - The ID of the company
 * @param {Object} res - The response object
 */
export const deleteCompany = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.company.delete({ where: { id: Number(id) } });
        logger.info(`Company with ID ${id} deleted successfully`);
        res.status(204).end();
    } catch (error) {
        logger.error(`Failed to delete company with ID ${req.params.id}: ${error.message}`);
        res.status(500).json({ error: 'Failed to delete company' });
    }
};
