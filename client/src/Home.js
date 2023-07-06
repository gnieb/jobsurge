import { useEffect, useState } from "react"

export default function Home () {
    const [quote, setQuote] = useState("Take it one day at a time")
    
    return (
        <>
            <h1>welcome home</h1>
            <h1>{quote}</h1>

        </>
    )
}