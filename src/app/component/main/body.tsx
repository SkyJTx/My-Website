import Background from "./background"
import Connect from "./connect"
import Navbar from "./navbar"
import Footer from "./footer"

export default function Body({children}: any) {
    return (
        <main>
            <Background/>
            <Navbar/>
            <div className="w-10 h-10"/>
            {children}
            <Connect/>
            <Footer/>
        </main>
    )
}