import Navbar from './component/navbar'
import Background from './component/background'
import Article from './component/article'
import Footer from './component/footer'
import Connect from './component/connect'

export default function Home() {
  const hyperLinkStyle: string = "text-cyan-400 hover:text-yellow-400 transition ease-in-out duration-200"

  return (
    <main>
      <Background/>
      <Navbar/>
      <div id="logo-container" className="mt-72 mb-72">
        <img id="logo" src="./logo/logo.jpg" alt="SkyJT's Logo" className="mx-auto w-48 h-48 rounded-full overflow-hidden text-center animate-logo shadow-xl"></img>
      </div>
      <h1 className="text-5xl font-bold text-center bottom-0">
        Welcome to{' '}
        <a className={hyperLinkStyle} href="https://github.com/SkyJTx" target="_blank" rel="noopener noreferrer">
          SkyJT
        </a>
      </h1>
      <Article title="Hello World!" date="2023/11/30 9:31 PM" modify={true}>
        <p>My name is Nattakarn Khumsupha. I'm a computer engineering student at KMUTNB (King Mongkut's University of Technology North Bangkok). I'm currently interested in Programming, Technology, Classical Music, History, and many more.</p>
        <hr></hr>
        <p>Experienced Programming Languages and Tools:</p>
        <ul>
          <li>
            <a className={hyperLinkStyle} href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
              Python
            </a>
          </li>
          <li>
            <a className={hyperLinkStyle} href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer">
              Arduino
            </a>
          </li>
          <li>
            <a className={hyperLinkStyle} href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              Node.js
            </a>
          </li>
          <li>
            <a className={hyperLinkStyle} href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>
          </li>
        </ul>
        <hr></hr>
        <p>Other Programming Languages and Tools I'm willing to learn:</p>
        <ul>
          <li>
            <a className={hyperLinkStyle} href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer">
              Rust
            </a>
          </li>
          <li>
            <a className={hyperLinkStyle} href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
              MySQL
            </a>
          </li>
          <li>
            <a className={hyperLinkStyle} href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
              PostgreSQL
            </a>
          </li>
          <li>
            <a className={hyperLinkStyle} href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
              MongoDB
            </a>
          </li>
          <li>
            <a className={hyperLinkStyle} href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
              Docker
            </a>
          </li>
        </ul>
      </Article>
      <Connect/>
      <Footer version="1.0.0dev"/>
    </main>
  )
}
