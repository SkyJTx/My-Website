import Link from 'next/link'

const Navbar = () => {
  const navStyle: string = "nav-link inline-block m-2 p-3 border-transparent text-white hover:text-yellow-400 transition ease-in-out duration-1000"

  return (
    <div>
      <nav className="m-0 p-0 fixed top-0 z-50 w-screen bg-gradient-to-b from-slate-800 to-transparent hover:backdrop-blur-sm transition ease-in-out duration-200">
        <ul>
          <li id="Home" className={navStyle}>
            <Link href="/">
              Home
            </Link>
          </li>
          <li id="Work" className={navStyle}>
            <Link href="/work">
              Work
            </Link>
          </li>
          <li id="About" className={navStyle}>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav> 
    </div> 
  )
}

export default Navbar
