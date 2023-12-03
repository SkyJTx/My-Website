import ReactMarkdown from "react-markdown"

const jsdom = require("jsdom")
const { JSDOM } = jsdom

async function getMarkdown(url: string) {
    const res = await fetch(url, { next: { revalidate: 60 } })
    const data = await res.text()
    const stringHTML = <ReactMarkdown>{data}</ReactMarkdown>
    let dom = new JSDOM(stringHTML.props.children)
    let document = dom.window.document
    let allElements = document.getElementsByTagName("*")
    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i]
        if (element.tagName === "H1") {
            element.setAttribute("class", "text-2xl text-bold text-center my-3 text-yellow-500")
        } else if (element.tagName === "H2") {
            element.setAttribute("class", "text-xl text-bold text-center my-3 text-yellow-500")
        } else if (element.tagName === "H3") {
            element.setAttribute("class", "text-lg text-bold text-center my-3 text-yellow-500")
        } else if (element.tagName === "H4") {
            element.setAttribute("class", "text-md text-bold text-center my-3 text-yellow-500")
        } else if (element.tagName === "H5") {
            element.setAttribute("class", "text-sm text-bold text-center my-3 text-yellow-500")
        } else if (element.tagName === "H6") {
            element.setAttribute("class", "text-xs text-bold text-center my-3 text-yellow-500")
        } else if (element.tagName === "P") {
            element.setAttribute("class", "text-md")
        } else if (element.tagName === "UL") {
            element.setAttribute("class", "list-disc list-inside")
        } else if (element.tagName === "LI") {
            element.setAttribute("class", "text-md")
        } else if (element.tagName === "HR") {
            element.setAttribute("class", "m-3 border-slate-400 border-2 rounded")
        } else if (element.tagName === "A") {
            element.setAttribute("class", "hyperlink")
            element.setAttribute("target", "_blank")
            element.setAttribute("rel", "noopener noreferrer")
        } else if (element.tagName === "IMG") {
            element.setAttribute("class", "m-5")
        } else {
            element.setAttribute("class", "")
        }
    }

    const result = dom.serialize()

    return (
        <ReactMarkdown>
            {result}
        </ReactMarkdown>
    )
}

export default getMarkdown
