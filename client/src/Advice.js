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
            <div key={a.id}>
                <h1>{a.quote}</h1>
                <p>{a.by}</p>
            </div>
        )
    })

    return (
        <div>
            {displayAdvice}
        </div>
    )
}