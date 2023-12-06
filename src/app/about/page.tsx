"use client"

import Article from "../component/main/article"
import Body from "../component/main/body"
import MD from "../component/markdown/md"

const About = () => {
    return (
        <Body>
            <div className="w-10 h-10"></div>
            <Article title="About Me" date="" modify={false}>
                <MD url="https://raw.githubusercontent.com/SkyJTx/SkyJTx/main/README.md"/>
            </Article>
        </Body>
    )
}

export default About