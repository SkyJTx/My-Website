"use client"

import Article from "../component/main/article"
import Background from "../component/main/background"
import Connect from "../component/main/connect"
import Footer from "../component/main/footer"
import Navbar from "../component/main/navbar"
import MD from "../component/markdown/md"

const About = () => {
    return (
        <main>
            <Background/>
            <Navbar/>
            <div className="w-10 h-10"></div>
            <Article title="About Me" date="" modify={false}>
                <MD url="https://raw.githubusercontent.com/SkyJTx/SkyJTx/main/README.md"/>
            </Article>
            <Connect/>
            <Footer/>
        </main>
    )
}

export default About