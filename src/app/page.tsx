import Article from './component/main/article'
import Body from './component/main/body'

export default function Home() {

  return (
    <Body>
      <div id="logo-container" className="mt-80 mb-80">
        <img id="logo" src="./logo/logo.jpg" alt="SkyJT's Logo" className="mx-auto w-48 h-48 rounded-full overflow-hidden text-center animate-logo shadow-xl"></img>
      </div>
      <Article title="Hello World!" date="2023/11/30 9:31 PM" modify={true}>
        <p>My name is Nattakarn Khumsupha. I'm a computer engineering student at KMUTNB (King Mongkut's University of Technology North Bangkok). I'm currently interested in Programming, Technology, Classical Music, History, and many more.</p>
        <hr></hr>
        <p>Experienced Programming Languages and Tools:</p>
        <ul>
          <li>
            <a className="hyperlink" href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
              Python
            </a>
          </li>
          <li>
            <a className="hyperlink" href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer">
              Arduino
            </a>
          </li>
          <li>
            <a className="hyperlink" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              Node.js
            </a>
          </li>
          <li>
            <a className="hyperlink" href="https://bun.sh/" target="_blank" rel="noopener noreferrer">
              Bun (Node.js on Crack)
            </a>
          </li>
          <li>
            <a className="hyperlink" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>
          </li>
          <li>
            <a className="hyperlink" href="=https://flutter.dev/" target="_blank" rel="noopener noreferrer">
              Flutter
            </a>
          </li>
        </ul>
        <hr></hr>
        <p>Other Programming Languages and Tools I'm willing to learn:</p>
        <ul>
          <li>
            <a className="hyperlink" href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer">
              Rust
            </a>
          </li>
          <li>
            <a className="hyperlink" href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
              MongoDB
            </a>
          </li>
          <li>
            <a className="hyperlink" href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
              Docker
            </a>
          </li>
        </ul>
      </Article>
    </Body>
  )
}
