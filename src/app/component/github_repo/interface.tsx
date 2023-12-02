export interface Repo {
    name: string,
    description: string,
    language: string,
    url: string,
}

export interface RepoListProps {
    data: Repo[]
}