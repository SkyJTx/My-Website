"use server"

import hljs from "highlight.js"

export async function getCode(link: string) {
    const response = await fetch(link, { next: { revalidate: 60 } })
    if (!response.ok) {
        throw new Error("Failed to fetch code")
    }
    const stringCode = await response.text()
    const highlightedCode = hljs.highlightAuto(stringCode)
    return {code: highlightedCode.value, lang: highlightedCode.language}
}
