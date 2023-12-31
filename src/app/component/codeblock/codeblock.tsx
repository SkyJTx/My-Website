"use client"

import { useState, useEffect } from "react"
import { getCode } from "./getcode"
import 'highlight.js/styles/monokai-sublime.css'
import { ReactNode } from "react"

export default function Codeblock({title, description, url, children}: {title: string, description: string, url: string, children?: ReactNode}) {

    const [code, setChildren]: any = useState({})

    useEffect(() => {
        async function fetchData() {
            const data = await getCode(url)
            setChildren(data)
        }
        fetchData()
    }, [url])

    return (
        <div>
            <h2 className="m-auto p-0 text-center font-bold text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                {title}
            </h2>
            <p className="text-center text-white text-md m-5">
                {description}
            </p>
            <div className="m-5 p-5 bg-zinc-800 border-solid border-white border-4 rounded-md">
                <pre>
                    <code>
                        {
                            (code.code !== undefined) ? (
                                <div className="overflow-auto" dangerouslySetInnerHTML={{__html: code.code}}/>
                            ) : ("Loading...")
                        }
                    </code>
                </pre>
            </div>
            {children}
            <p className="text-right text-white font-bold text-sm">{`Language: ${code.lang !== undefined ? (code.lang) : ("Loading...")}`}</p>
        </div>
    )
}
