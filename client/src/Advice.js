import { useEffect, useState } from "react"

export default function Advice () {
    const [advice, setAdvice] = useState([])

    useEffect(() => {
        fetch('/quotes')
            .then(r => {
                if (r.ok) {
                    r.json().then((data) => setAdvice(data))
                }
                else {
                    console.log("Error - check request and try again")
                }
            })
    }, [])

    const displayAdvice = advice.map(a => {
        return (
            <div key={a.id} className="p-10">
                <h1 className="text-6xl">{a.quote}</h1>
                <p className="text-right ">- {a.by}</p>
            </div>
        )
    })

    return (
        <div className="flex justify-center m-5 p-8 ">
            <div className="flex-col w-2/3">
            {displayAdvice}
            </div>
        </div>
    )
}