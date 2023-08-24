import { useEffect, useState } from "react"
import ToDo from "./ToDo"

export default function ToDos(){
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
        return (
            <ToDo key={t.id} t={t} />
        )
    })

    return(
        <div>
            
        </div>
    )
}