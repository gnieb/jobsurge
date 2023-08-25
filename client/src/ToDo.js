import { useState } from "react"
export default function ToDo({t, removeToDo}){
    const [isDone, setIsDone] = useState(t.done)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setIsDone(!isDone)
    //     console.log(isDone)
    //     const updatedTD = {
    //         done : isDone
    //     }
    //     console.log(updatedTD)
        
    //     fetch(`/todos/${t.id}`, {
    //         method: "PATCH",
    //         headers: {"Content-Type":"application/json"},
    //         body: JSON.stringify(updatedTD)
    //     })
    //     .then(r=> {
    //         if(r.ok){
    //             r.json().then(data => {
    //                 console.log(data)
    //             })
    //         }
    //     })
    // }



    const handleDelete = () => {
        fetch(`/todos/${t.id}`,{
            method:"DELETE"
        })
        .then(r=> {
            if(r.ok){
                r.json().then(data => {
                    removeToDo(t)
                    console.log("To Do deleted successfully!")
                })
            }
        })
    }
    
    return (
        <div>
            <div className="text-2xl m-1">
                    ~ {t.title}
                <button className="mx-2 px-1 rounded-full shadow bg-orange-100"
                onClick={handleDelete}>x</button>
            </div>
        </div>
    )
}