import { Score } from "./score_interface"
import ReactMarkdown from "react-markdown"

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
    const hyperLinkStyle: string = "text-cyan-400 hover:text-yellow-400 transition ease-in-out duration-200"

    return (
        <div className="p-10 overflow-auto bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-800 rounded-xl" id="music-repositories">
            {data !== undefined ? (
                data.map((score: Score, index: number) => (
                    <div className="flex items-center my-5" id={score.title} key={index}>
                        <div className="m-0 p-0 mr-4">
                            <a className="max-h-32 mr-10" href={score.href} target="_blank" rel="noopener noreferrer">
                                <img className="max-h-32 mr-10" src={score.thumbnail} alt={score.title}></img>
                            </a>
                        </div>

                        <div className="flex-grow items-center text-ellipsis" id="info">
                            <a className={hyperLinkStyle + " text-xl"} href={score.href} target="_blank" rel="noopener noreferrer">
                                <h3 className="" id="title" key="title">{(index+1) + ". " + score.title}</h3>
                            </a>
                            <p className="text-lg" id="composer" key="description">{"Composer: "+ score.composer}</p>
                            <p className="text-lg" id="date" key="date">{"Date of Creation: "+ unixToDateString(Number(score.date))}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
