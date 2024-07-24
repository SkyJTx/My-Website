"use client"

import Codeblock from "./codeblock/codeblock"
import Article from "./main/article"
import Body from "./main/body"
import DropdownList from "./main/dropdownlist"
import { Loading } from "./main/elements"
import PageNavBar from "./main/pagenavbar"
import { useState } from "react"

export default function ComponentTesting() {
    const [page, setPage] = useState(1)

    return (
        <Body>
            <Article title="Testing Corridor" date="" modify={true}>
                <p>
                    Welcome to the testing corridor. This is where I test out new components and features for my website. This page is not meant to be seen by the public, but if you are here, then you are welcome to look around.
                </p>
                <DropdownList title="test" data={["test1", "test2"]} setData={(value: string) => console.log(value)}/>
                <Loading/>
                <p className="text-center text-white text-sm font-bold">
                    You choose page {page}.
                </p>
                <PageNavBar length={10} pageSetter={(page) => {setPage(page)}}/>
                
            </Article>
            <Article>
                <Codeblock title="Test" description="test test" url="https://raw.githubusercontent.com/SkyJTx/Data-Visualization-using-Python-Turtle/main/01PartB_Final.py"/>
            </Article>
        </Body>
    )
}