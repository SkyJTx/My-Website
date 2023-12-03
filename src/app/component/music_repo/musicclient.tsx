"use client"

import { Score } from "./score_interface"

function unixToDateString(unix: number): string {
    const date = new Date(unix * 1000)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = ("0" + date.getHours()).slice(-2)
    const min = ("0" + date.getMinutes()).slice(-2)
    const sec = ("0" + date.getSeconds()).slice(-2)
    return `${year}/${month}/${day} ${hour}:${min}:${sec}`
}

export function MusicClient({data}: any) {

    return (
        <div className="p-10 overflow-auto rounded-xl" id="music-repositories">
            {data !== undefined ? (
                data.map((score: Score, index: number) => (
                    <div className="flex items-center my-5" id={score.title} key={index}>
                        <div className="m-0 p-0 mr-4">
                            <a className="max-h-32 mr-10" href={score.href} target="_blank" rel="noopener noreferrer">
                                <img className="max-h-32 mr-10" src={score.thumbnail} alt={score.title}></img>
                            </a>
                        </div>

                        <div className="flex-grow items-center text-ellipsis" id={"info-" + (index+1)}>
                            <a className="hyperlink text-xl" href={score.href} target="_blank" rel="noopener noreferrer">
                                <h3 id="title" key="title">{(index+1) + ". " + score.title}</h3>
                            </a>
                            <p className="text-lg text-white" id="composer" key="description">{"Composer: "+ score.composer}</p>
                            <p className="text-lg text-white" id="date" key="date">{"Date of Creation: "+ unixToDateString(Number(score.date))}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-3xl text-center text-white">Loading...</p>
            )}
        </div>
    )
}
