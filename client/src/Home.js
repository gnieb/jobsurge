import { useEffect, useState } from "react"

export default function Home () {
    const [quote, setQuote] = useState("Take it one day at a time")
    
    return (
        <div>
            <div className="flex flex-row justify-between m-5 p-5">
                <div className = "m-5 p-5">
            
                    <p className="text-6xl">Did you drink water today?</p>
                    
                </div>
            <div className="m-5 p-5">
                <p className="text-3xl">{quote}</p>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <p>don't forget to move around a little! Take a break, go for a walk.</p>
        </div>
        </div>
    )
}