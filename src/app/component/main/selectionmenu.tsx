import { useState } from "react"

interface SelectionMenuProps {
    options: string[],
    onSelect: (selected: string) => void
}

const SelectionMenu = ({options, onSelect}: SelectionMenuProps) => {
    const [selected, setSelected] = useState<string>("None")

    const handleSelect = (option: string) => {
        setSelected(option)
        onSelect(option)
    }

    return (
        <div className="m-10 p-4 py-8 bg-slate-800 rounded-xl shadow-2xl">
            <h2 className="m-auto p-0 text-center font-bold text-3xl text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Select a Project Type
            </h2>
            <div className="m-5">
                <ul className="m-0 p-0 text-center">
                    {options.map((option: string) => (
                        <li key={option} className="my-2 mx-1 w-32 h-32 border-solid border-2 border-white rounded-md inline-flex items-center hover:scale-110 hover:bg-slate-700 transition-transform ease-in-out">
                            <button className="p-10 w-32 max-h-32 flex flex-col justify-center items-center border-none rounded-md" onClick={() => handleSelect(option)}>
                                <p className="m-0 text-sm text-bold text-white">{option}</p>
                            </button>
                        </li>
                    ))}
                </ul>
                <p className="m-0 text-lg text-bold text-white text-center">You have selected "{selected}".</p>
            </div>
        </div>
    )
}

export default SelectionMenu