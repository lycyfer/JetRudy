// import prisma from "../lib/prisma";

import prisma from "../lib/prisma.js";


export const getAllRepositories = async (req, res) => {
    try {
        const repositories = await prisma.repository.findMany();
        console.log(repositories)
        // return repositories;
        res.status(200).json(repositories)
    } catch (err) {
        console.error('Error fetching repositories:', err);
        throw err;
    }
};

export const getRepositoryByName = async (req, res) => {
    try {
        const { name } = req.query;
        const repositories = await prisma.repository.findMany({
            where: {
                name: {
                    contains: name,
                },
            },
        });
        res.status(200).json(repositories);
    } catch (err) {
        console.error('Error fetching repositories by name:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getRepositoryById = async (id) => {
    try {
        const repository = await prisma.repository.findUnique({
            where: { id },
        });
        res.status(200).json(repository)
    } catch (err) {
        console.error('Error fetching repository by ID:', err);
        throw err;
    }
};