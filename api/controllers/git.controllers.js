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

export const getRepositoryByName = async (name) => {
    try {
        const repository = await prisma.repository.findUnique({
            where: { name },
        });
        return repository;
    } catch (err) {
        console.error('Error fetching repository by name:', err);
        throw err;
    }
};

export const getRepositoryById = async (id) => {
    try {
        const repository = await prisma.repository.findUnique({
            where: { id },
        });
        return repository;
    } catch (err) {
        console.error('Error fetching repository by ID:', err);
        throw err;
    }
};