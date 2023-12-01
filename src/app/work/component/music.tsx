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

    const hyperLinkStyle: string = "text-cyan-400 hover:text-yellow-400 transition ease-in-out duration-200"

    return (
        <article id="MusicRepo" className="m-10 p-4 py-8 bg-slate-800 rounded-xl shadow-2xl">
            <h2 className="m-auto p-0 text-center font-bold text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Music Repository
            </h2>
            <p className="text-center text-lg m-5">
                This is a repository of my music scores. You can find more of my music scores on my {
                    <a className={hyperLinkStyle} href="https://musescore.com/skyjtx?share=copy_link" target="_blank" rel="noopener noreferrer">
                        MuseScore
                    </a>
                }. (Sorted by rating)
            </p>
            <div className="m-5">
                <MusicClient data={data}/>
            </div>
        </article>
    )
}

export default MusicRepo