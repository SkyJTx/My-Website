"use server"

import { Score } from "./score_interface"
import { MusicListProps } from "./musiclist_interface"

const jsdom = require("jsdom")
const { JSDOM } = jsdom

export async function getData(): Promise<MusicListProps>  {
    const response = await fetch('https://musescore.com/user/28571731/sheetmusic');
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const html = await response.text()
    const dom = new JSDOM(html);
    const jsStore = dom.window.document.getElementsByClassName("js-store")[0]
    const dataContent = jsStore.getAttribute("data-content")
    const data = JSON.parse(dataContent)

    const retrievedData: any = []
    for (let i = 0; i < data.store.page.data.scores.length; i++) {
        const score = data.store.page.data.scores[i]

        const title: string = score.title
        const href: string = score.href
        const thumbnail: string = score.thumbnails.large
        const date: string = score.date_created
        const instrument: string[] = score.parts_names
        const description: string = score.truncated_description
        const composer: string = score.composer_name

        const scoreData: Score = {
            title: title,
            href: href,
            thumbnail: thumbnail,
            date: date,
            instrument: instrument,
            description: description,
            composer: composer
        }

        retrievedData.push(scoreData)
    }
    return retrievedData;
}
