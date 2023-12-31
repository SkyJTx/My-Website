"use client"

import Article from "../component/main/article"
import MusicRepo from "../component/music_repo/music"
import GitHubRepo from "../component/github_repo/repo"
import SelectionMenu from "../component/main/selectionmenu"
import { useState } from 'react'
import Body from "../component/main/body"

const repoOptions = ["Music Repositories", "GitHub Repositories"]

function selectedRepo(selected: string) {
    switch (selected) {
        case "Music Repositories":
            return (
                <Article title="MuseScore Repositories" date="" modify={true}>
                    <p className="text-center">
                        These are all of my MuseScore repositories. You can see all of my repositories at {
                           <a className="hyperlink" href="https://musescore.com/skyjtx?share=copy_link" target="_blank" rel="noopener noreferrer">
                                MuseScore
                           </a>
                        }.
                    </p>
                    <MusicRepo/>
                </Article>
            )
        case "GitHub Repositories":
            return (
                <Article title="GitHub Repositories" date="" modify={true}>
                    <p className="text-center">These are all of my GitHub repositories. You can see my profile at {
                        <a className="hyperlink" href="https://github.com/SkyJTx" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    }.</p>
                    <GitHubRepo user="SkyJTx"/>
                </Article>
            )
        default:
            return (
                undefined
            )
    }
}

const Work = () => {
    const [selectedValue, setSelectedValue] = useState<string>("")
    const handleSelect = (selected: string) => {
        setSelectedValue(selected)
    }

    return (
        <Body>
            <SelectionMenu options={repoOptions} onSelect={handleSelect}/>
            {selectedRepo(selectedValue)}
        </Body>
    )
}

export default Work