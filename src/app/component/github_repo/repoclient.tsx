import { RepoListProps } from "./interface"

const RepoClient = ({data}: RepoListProps) => {
    return (
        <div className="p-10 overflow-auto rounded-xl" id="music-repositories">
            {data !== undefined ? (data.map((repo, index: number) => (
                <div className="my-5" id={repo.name} key={index}>
                    <a className="hyperlink text-xl" href={repo.url} target="_blank" rel="noopener noreferrer">
                        <h3 id="name" key="name">{(index+1) + ". " + repo.name}</h3>
                    </a>
                    <p id="description" key="description" className="text-lg text-white">{"Description: " + repo.description}</p>
                    <p id="language" key="language" className="text-lg text-white">{"Main Language: " + repo.language}</p>
                </div>
            ))) : (<p className="text-3xl text-center">Loading...</p>)}
        </div>
    )
}

export default RepoClient