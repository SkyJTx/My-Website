"use client"

import getMarkdown from "./getmd"
import { useEffect, useState } from "react"

const MD = ({url}: any) => {
    const [markdown, setMarkdown] = useState(undefined)

    useEffect(() => {
        async function fetchData() {
            const data: any = await getMarkdown(url)
            setMarkdown(data)
        }
        fetchData()
    }, [])

    return (
        <div className="overflow-auto" id="markdown">
            {markdown !== undefined ? (
                <div dangerouslySetInnerHTML={{__html: markdown}}></div>) : (
                <div className="text-3xl text-center text-white">Loading...</div>
            )}
        </div>
    )
}

export default MD