import { useEffect, useState } from "react"

export default function Jobs () {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('/fetchingjobs')
            .then((r) => {
                if (r.ok) {
                    r.json().then(r => {
                        setJobs(r)
                })
            }
        })
    }, [])


    return (
        <div>
            JOBS WILL GO HERE
        </div>
        
    )
}