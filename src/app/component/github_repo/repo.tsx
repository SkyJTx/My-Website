"use client"

import { getRepoData } from "./getrepo"
import { useEffect, useState } from 'react'
import RepoClient from "./repoclient"

const GitHubRepo = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data: any = await getRepoData()
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