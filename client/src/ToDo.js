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
                <button className="mx-1 rounded-full shadow bg-orange-100 font-bold"
                onClick={handleDelete}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
                <button className="mx-1 px-1 rounded-full shadow bg-orange-100 font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                </button>
            </div>
        </div>
    )
}