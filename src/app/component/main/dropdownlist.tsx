import { useState } from "react"

export default function DropdownList({title, data, setData}: {title: string, data: string[], setData: Function}): JSX.Element {
    const [isActivated, setIsActivated] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>(title)

    function showOptions() {
        if (isActivated) {
            return (
                <div>
                    <ul>
                        {data.map((item, index) => {
                            return (
                                <li key={index} onClick={() => {setData(item); setIsActivated(false); setSelected(item)}}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            ) 
        } return (
                <div></div>
        )
    }

    return (
        <div className="m-1 p-1 border-solid border-white border-5 rounded-md bg-slate-600">
            <button title={title} type="button" onClick={() => {setIsActivated(!isActivated)}}>{selected}</button>
            {showOptions()}
        </div>
    )
}