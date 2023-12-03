export async function getRepoData(): Promise<any> {
    const res = await fetch("https://api.github.com/users/SkyJTx/repos", { next: { revalidate: 60 } })
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