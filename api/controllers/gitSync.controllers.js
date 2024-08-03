import axios from 'axios';
import prisma from '../lib/prisma.js';
import { ObjectId } from 'mongodb';

export const gitSync = async () => {
    try {
        const res = await axios.get('https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc');
        const repos = res.data.items;
        console.log(res, repos);
        for (let repo of repos) {
            const repoId = new ObjectId(repo.id.toString().padStart(24, '0'));
            await prisma.repository.upsert({
                where: { id: repoId.toHexString() },
                update: {
                    name: repo.name,
                    fullName: repo.full_name,
                    url: repo.html_url,
                    description: repo.description,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    openIssues: repo.open_issues_count,
                    language: repo.language,
                    createdAt: new Date(repo.created_at),
                    updatedAt: new Date(repo.updated_at),
                    pushedAt: new Date(repo.pushed_at),
                    homepage: repo.homepage,
                    license: repo.license ? repo.license.name : null,
                    owner: repo.owner.login,
                },
                create: {
                    id: repoId.toHexString(),
                    name: repo.name,
                    fullName: repo.full_name,
                    url: repo.html_url,
                    description: repo.description,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    openIssues: repo.open_issues_count,
                    language: repo.language,
                    createdAt: new Date(repo.created_at),
                    updatedAt: new Date(repo.updated_at),
                    pushedAt: new Date(repo.pushed_at),
                    homepage: repo.homepage,
                    license: repo.license ? repo.license.name : null,
                    owner: repo.owner.login,
                },
            });
        }
        console.log('sync complete');
    } catch (err) {
        console.error('Error occurred during git sync:', err);
    }
};