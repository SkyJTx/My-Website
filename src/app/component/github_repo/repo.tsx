"use client"

import { getRepoData } from "./getrepo"
import { useEffect, useState } from 'react'
import RepoClient from "./repoclient"

const GitHubRepo = ({user}: {user: string}) => {

    const [data, setData] = useState([])
    const url = `https://api.github.com/users/${user}/repos`

    useEffect(() => {
        async function fetchData() {
            const data: any = await getRepoData(url)
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <div className="block">
            <RepoClient data={data}/>
        </div>
    )
}

export default GitHubRepo