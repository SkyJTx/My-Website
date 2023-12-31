"use server"

export async function getRepoData(url: string): Promise<{name: string, description: string, language: string, url: string}[]> {
    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) {
        throw new Error("Failed to fetch code")
    }
    const data = await res.json()
    let retrivedData = []
    for (let i = 0; i < data.length; i++) {
        const repo = data[i]
        const name = repo.name
        const description = repo.description
        const language = repo.language
        const url = repo.html_url
        const repoData = {
            name: name,
            description: description,
            language: language,
            url: url
        }
        retrivedData.push(repoData)
    }
    return retrivedData
}