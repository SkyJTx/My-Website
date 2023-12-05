import { Loading } from "../main/elements"
import { RepoListProps } from "./interface"

const RepoClient = ({data}: RepoListProps) => {
    return (
        <div className="p-10 overflow-auto rounded-xl" id="music-repositories">
            {data !== undefined ? (data.map((repo, index: number) => (
                <div className="m-5 p-5 border-2 border-solid border-white rounded-md hover:scale-105 hover:bg-slate-700 transition-transform ease-in-out" id={repo.name} key={index}>
                    <a className="hyperlink text-xl w-fit" href={repo.url} target="_blank" rel="noopener noreferrer">
                        {(index+1) + ". " + repo.name}
                    </a>
                    <p id="description" key="description" className="text-lg text-white">{"Description: " + repo.description}</p>
                    <p id="language" key="language" className="text-lg text-white">{"Main Language: " + repo.language}</p>
                </div>
            ))) : (<Loading/>)}
        </div>
    )
}

export default RepoClient