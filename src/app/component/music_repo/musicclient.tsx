"use client"

import { Loading } from "../main/elements"
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

export function MusicClient({data, start}: any) {

    return (
        <div className="p-10 overflow-auto" id="music-repositories">
            {data.length != 0 ? (
                data.map((score: Score, index: number) => (
                    <div className="flex m-5 p-5 border-2 border-solid border-white rounded-md hover:scale-105 hover:bg-slate-600 transition-transform ease-in-out shadow-xl" id={score.title} key={index}>
                        <div className="m-0 p-0 mr-4">
                            <a href={score.href} target="_blank" rel="noopener noreferrer">
                                <img className="max-h-32" src={score.thumbnail} alt={score.title}></img>
                            </a>
                        </div>
                        <div id={"info-" + (index+start+1)}>
                            <a className="hyperlink text-xl w-fit" href={score.href} target="_blank" rel="noopener noreferrer">
                                {index+start+1 + ". " + score.title}
                            </a>
                            <p className="text-lg text-white" id="composer" key="description">{"Composer: "+ score.composer}</p>
                            <p className="text-lg text-white" id="date" key="date">{"Date of Creation: "+ unixToDateString(Number(score.date))}</p>
                        </div>
                    </div>
                ))
            ) : (
                <Loading/>
            )}
        </div>
    )
}
