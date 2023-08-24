import { useEffect, useState } from "react"

export default function Time(){
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        let timer = setInterval(()=> setDate(new Date()), 1000);
        return function cleanup(){
            clearInterval(timer)
        }
    })
    return(
        <div>
            <div className="text-9xl">WEDNESDAY</div>
            <div className="text-5xl">{date.toLocaleDateString()}</div>
            <div className="text-5xl">{date.toLocaleTimeString()}</div>

        </div>
    )
}