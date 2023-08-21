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

    const displayJobs = jobs.map(j, i => <Job key={i} j={j} />)

    return (
        <div>
            {jobs}
        </div>
        
    )
}