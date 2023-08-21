import { useEffect, useState } from "react"
import Job from "./Job"

export default function Jobs () {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('/fetchjobs')
            .then((r) => {
                if (r.ok) {
                    r.json().then(r => {
                        setJobs(r)
                })
            }
        })
    }, [])

    const displayJobs = jobs.map((j, i) => {
       return (
        <Job key={i} j={j} />
       ) 
    })

    return (
        <div className="flex justify-between sm:p-10">
            <div>
            <div className="text-5xl">ODDBALL</div>
            <div>{displayJobs}</div>
            </div>
            
        </div>
        
    )
}