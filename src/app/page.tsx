import Navbar from './navbar'
import Background from './background'

export default function Home() {
  const hyperLinkStyle: string = "text-cyan-400 hover:text-yellow-500 transition ease-in-out duration-200"

  return (
    <main>
      <Background/>
      <Navbar/>
      <div id="logo-container" className="mt-48 mb-48">
        <img id="logo" src="./logo/logo.jpg" alt="SkyJT's Logo" className="mx-auto w-48 h-48 rounded-full overflow-hidden text-center"></img>
      </div>
      <h1 className="text-4xl font-bold text-center bottom-0">
        Welcome to{' '}
        <a className={hyperLinkStyle} href="https://github.com/SkyJTx" target="_blank" rel="noopener noreferrer">
          SkyJT
        </a>
      </h1>
    </main>
  )
}
