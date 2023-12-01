const Connect = () => {
    const liStyle: string = "my-2 mx-1 w-32 h-32 border-solid border-2 border-white rounded-md inline-flex items-center hover:scale-110 transition-transform ease-in-out"
    const aStyle: string = "p-10 w-32 max-h-32 flex flex-col justify-center items-center border-none rounded-md"
    const imgStyle: string = "m-5 w-32 max-h-32 rounded-full"
    const pStyle: string = "m-0 text-sm text-bold text-white"

    return (
        <article className="m-10 p-4 py-8 bg-slate-800 rounded-xl shadow-2xl">
            <h2 className="m-auto p-0 text-center font-bold text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Connect with Me
            </h2>
            <div className="m-5">
                <ul className="m-0 p-0 text-center">
                    <li className={liStyle}>
                        <a className={aStyle} href="mailto: nattakarn.khumsupha.user1@outlook.com" target="_blank" rel="noopener noreferrer">
                            <img className={imgStyle} src="./icon/Email.png" alt="E-mail"></img>
                            <p className={pStyle}>E-mail</p>
                        </a>
                    </li>
                    <li className={liStyle}>
                        <a className={aStyle} href="https://github.com/SkyJTx" target="_blank" rel="noopener noreferrer">
                            <img className={imgStyle} src="./icon/GitHub.svg" alt="GitHub"></img>
                            <p className={pStyle}>GitHub</p>
                        </a>
                    </li>
                    <li className={liStyle}>
                        <a className={aStyle} href="https://leetcode.com/skyjtx/" target="_blank" rel="noopener noreferrer">
                            <img className={imgStyle} src="./icon/LeetCode.png" alt="LeetCode"></img>
                            <p className={pStyle}>LeetCode</p>
                        </a>
                    </li>
                    <li className={liStyle}>
                        <a className={aStyle} href="https://www.youtube.com/channel/UCoulLzsv5reAj8Pl_MfilUA" target="_blank" rel="noopener noreferrer">
                            <img className={imgStyle} src="./icon/YouTube.png" alt="YouTube"></img>
                            <p className={pStyle}>YouTube</p>
                        </a>
                    </li>
                    <li className={liStyle}>
                        <a className={aStyle} href="https://www.facebook.com/skyjtx" target="_blank" rel="noopener noreferrer">
                            <img className={imgStyle} src="./icon/Facebook.png" alt="Facebook"></img>
                            <p className={pStyle}>Facebook</p>
                        </a>
                    </li>
                    <li className={liStyle}>
                        <a className={aStyle} href="https://musescore.com/skyjtx?share=copy_link" target="_blank" rel="noopener noreferrer">
                            <img className={imgStyle} src="./icon/MuseScore.png" alt="MuseScore"></img>
                            <p className={pStyle}>MuseScore</p>
                        </a>
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default Connect