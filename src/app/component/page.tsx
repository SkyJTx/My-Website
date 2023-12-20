"use client"

import Article from "./main/article"
import Body from "./main/body"
import { Loading } from "./main/elements"
import PageNavBar from "./main/pagenavbar"

export default function ComponentTesting() {
    return (
        <Body>
            <Article title="Testing Corridor" date="" modify={true}>
                <p>
                    Welcome to the testing corridor. This is where I test out new components and features for my website. This page is not meant to be seen by the public, but if you are here, then you are welcome to look around.
                </p>
                <Loading/>
                <PageNavBar length={5} pageSetter={(page) => {console.log(page)}}/>
            </Article>
        </Body>
    )
}