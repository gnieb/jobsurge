import { useEffect, useState } from "react"
import Job from "./Job"
import Loading from "./Loading"


export default function Jobs () {
    const [jobs, setJobs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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

    const oddballJobs = jobs.filter(job => job.company === "oddball")
    const displayOdd = oddballJobs.map((j, i) => {
       return (
        <Job key={i} j={j} />
       ) 
    })

    return (
        <>
        <div className="h-screen w-full flex justify-center items-center fixed">
            <Loading />
        </div>
        
        <div className="flex justify-between sm:p-10">
                <div>
                
                <div className="text-5xl">ODDBALL</div>
                <div>{displayOdd}</div>
                </div>
        </div>
        </>
    )
}