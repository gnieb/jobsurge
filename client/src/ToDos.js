import { useEffect, useState } from "react"
import ToDo from "./ToDo"
import NewToDo from "./NewToDo"

export default function ToDos(){
    const [showModal, setShowModal] = useState(false)
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('/todos')
        .then(r => {
            if(r.ok) {
                r.json().then(data => {
                    setTodos(data)
                })
            }
        })
    }, [])

    const displayToDos = todos.map(t => {
        if(t.done === true) {
            return (
            
            <div key={t.id} className="line-through">
                <ToDo  t={t}/>
            </div>
        )
        } else {
            return (
                <div key={t.id}><ToDo  t={t} /></div>
            )
        }
        
    })

    return(
        <>
        {showModal ? 
            <NewToDo setShowModal={setShowModal} /> : <></>}
            <div className="">
                <button onClick={()=> setShowModal(!showModal)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-full inline-flex items-center">Add</button>
                {displayToDos}
            </div>
       
        </>
    )
}