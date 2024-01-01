import { useState } from "react"

export default function DropdownList({title, data, setData}: {title: string, data: string[], setData: Function}): JSX.Element {
    const [isActivated, setIsActivated] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>(title)

    function showOptions() {
        if (isActivated) {
            return (
                <div className="absolute border-solid border-white border-2 bg-slate-600 min-w-32 text-clip">
                    {data.map((item, index) => {
                        return (
                            <button className="flex pl-2 hover:bg-slate-500 transition ease-in-out duration-200 min-w-32" title={item} type="button" key={index} onClick={() => {setData(item); setIsActivated(false); setSelected(item)}}>{item}</button>
                        )
                    })}
                </div>
            ) 
        } return (
                <div></div>
        )
    }

    return (
        <div className="relative">
            <button className="m-1 p-1 min-w-32 text-clip text-left border-solid border-white border-4 rounded-md bg-slate-600 max-w-32 hover:bg-slate-500 transition ease-in-out duration-200" title={title} type="button" onClick={() => {setIsActivated(!isActivated)}}>{selected}</button>
            {showOptions()}
        </div>
    )
}