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

    const handleDelete = (e) => {
        e.preventDefault();
        fetch(`/todos/${t.id}`,{
            method:"DELETE"
        })
        .then(r=> {
            if(r.ok){
                r.json().then(console.log("To Do deleted successfully!"))
            }
        })
    }
    
    return (
        <div>
            <div className="text-2xl">
                    ~ {t.title}
                <button className="mx-2 px-1 rounded-full shadow bg-pink-100">x</button>
            </div>
        </div>
    )
}