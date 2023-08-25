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
        <div className="">
            <div className="text-center">
                <div className="text-3xl lg:text-[250px] font-black leading-none	">
                    {weekDay.toUpperCase()}
                </div>
                <div className="text-3xl sm:text-7xl p-1">{date.toLocaleDateString()}</div>
                <div className="text-3xl sm:text-7xl ">{date.toLocaleTimeString()}</div>
            </div>
        </div>
    )
}