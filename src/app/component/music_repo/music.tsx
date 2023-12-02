"use client"

import { getData } from "./getmusic"
import { useEffect, useState } from 'react'
import { MusicClient } from "./musicclient"

const MusicRepo = () => {

    const [data, setData] = useState(undefined)

    useEffect(() => {
        async function fetchData() {
            const data: any = await getData()
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <MusicClient data={data}/>
        </div>
    )
}

export default MusicRepo