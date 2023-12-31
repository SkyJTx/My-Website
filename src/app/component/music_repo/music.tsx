"use client"

import { getData } from "./getmusic"
import { useEffect, useState } from 'react'
import { MusicClient } from "./musicclient"
import PageNavBar from "../main/pagenavbar"

const MusicRepo = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [length, setLength] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const data: any = await getData(page)
            const len: number = data.pop()
            setLength(len)
            setData(data)
        }
        setData([])
        fetchData()
    }, [page])

    function handleSelect(selectedPage: number) {
        setPage(selectedPage)
    }

    return (
        <div>
            <MusicClient data={data} start={(page-1)*20}/>
            <PageNavBar length={Math.floor((length-1)/20)+1} pageSetter={handleSelect}/>
        </div>
    )
}

export default MusicRepo