"use client"

import Article from "../component/article"
import Background from "../component/background"
import Connect from "../component/connect"
import Footer from "../component/footer"
import Navbar from "../component/navbar"
import MusicRepo from "./component/music"

const Work = () => {
    return (
        <main>
            <Background/>
            <Navbar/>
            <Article title="Work in Progress" date="Date of Issue: 2023/12/1 9:17 PM" modify={true}>
                Repositories Selector, Music Repositories, and GitHub Repositories are still in progress. Please wait for a while.
            </Article>
            <MusicRepo/>
            <Connect/>
            <Footer/>
        </main>
    )
}

export default Work