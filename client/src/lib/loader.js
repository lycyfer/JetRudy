import { defer } from "react-router-dom"
import apiRequest from "./apiRequest"

export const RepositoryPageLoader = async () => {
    const repositoryPromise = await apiRequest("/repository")
    console.log(repositoryPromise)
    return defer({
        repositoryResponse: repositoryPromise
    })
}