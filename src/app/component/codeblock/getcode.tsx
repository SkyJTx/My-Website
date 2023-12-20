"use server"

async function getCode(link: string) {
    const response = await fetch(link, { next: { revalidate: 60 } })
    const stringCode = await response.text()
    return stringCode
}