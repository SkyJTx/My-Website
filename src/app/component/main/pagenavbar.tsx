import { useState } from "react"

interface pageNavBarProps {
    length: number,
    pageSetter: (page: number) => void
}

export default function PageNavBar({length, pageSetter}: pageNavBarProps) {
    const liStyle = "m-1 inline-flex justify-center items-center border-solid border-2 border-white rounded-md hover:scale-110 hover:bg-slate-700 transition-transform ease-in-out"
    const selectedLiStyle = "m-1 inline-flex justify-center items-center border-solid border-2 border-white rounded-md scale-110 transition-transform ease-in-out"
    const buttonStyle = "p-3 rounded-md text-white text-sm font-bold"
    const selectedButtonStyle = "p-3 rounded-md bg-white text-black text-sm font-bold scale-110"

    const [selectedPage, setPage] = useState(1)

    var pages: number[] = []
    for (var i = 0; i < length; i++) {
        pages.push(i + 1)
    }

    function handleSelect(page: number) {
        setPage(page)
        pageSetter(page)
    }

    return (
        <div>
            <ul className="m-0 p-0 text-center">
                {pages.map((page) => (
                    <li key={page} className={selectedPage === page ? (selectedLiStyle) : (liStyle)}>
                        <button className={selectedPage === page ? (selectedButtonStyle) : (buttonStyle)} onClick={() => handleSelect(page)}>{page}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}