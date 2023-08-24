import { useState } from "react"
export default function ToDo({t}){
    

    const [isDone, setIsDone] = useState(t.done)


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsDone(!isDone)
        console.log(isDone)
        const updatedTD = {
            done : isDone
        }
        console.log(updatedTD)
        
        fetch(`/todos/${t.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(updatedTD)
        })
        .then(r=> {
            if(r.ok){
                r.json().then(data => {
                    console.log(data)
                })
            }
        })
    }
    
    return (
        <>
        {isDone? 
        <form onSubmit={handleSubmit} >
            <button className="line-through" type="submit">{t.title}</button>
        </form> :
        <form onSubmit={handleSubmit}>
        <button type="submit">{t.title}</button>
        </form> 
        }
        </>
    )
}