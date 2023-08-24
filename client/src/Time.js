import { useEffect, useState } from "react"

export default function Time(){
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        let timer = setInterval(()=> setDate(new Date()), 1000);
        return function cleanup(){
            clearInterval(timer)
        }
    })
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const weekDay = days[(date.getDay())]
    return(
        <div>
            <div className="text-3xl lg:text-[180px]">{weekDay.toUpperCase()}</div>
            <div className="text-3xl sm:text-5xl">{date.toLocaleDateString()}</div>
            <div className="text-3xl sm:text-5xl">{date.toLocaleTimeString()}</div>
        </div>
    )
}