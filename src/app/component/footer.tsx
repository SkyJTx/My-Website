const Footer = ({version}: any) => {
    const hyperLinkStyle: string = "text-cyan-400 hover:text-yellow-400 transition ease-in-out duration-200"

    return (
        <footer className="bottom-0 bg-slate-800 py-5 m-0 px-0 overflow-hidden">
            <p className="text-center text-l">
                Icons by {
                    <a className={hyperLinkStyle} href="https://icons8.com/" target="_blank" rel="noopener noreferrer">
                        Icons8
                    </a>
                }.
            </p>
            <p className="text-center text-l">
                SkyJT's Website v{version} | Nattakarn Khumsupha. Whatever License.
            </p>
        </footer>
    )
}

export default Footer