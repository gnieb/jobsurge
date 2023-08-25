import { useEffect, useState } from "react"
import ToDo from "./ToDo"
import NewToDo from "./NewToDo"

export default function ToDos({todos, setTodos}){
    const [showModal, setShowModal] = useState(false)
    // const [todos, setTodos] = useState([])
    // useEffect(() => {
    //     fetch('/todos')
    //     .then(r => {
    //         if(r.ok) {
    //             r.json().then(data => {
    //                 setTodos(data)
    //             })
    //         }
    //     })
    // }, [])

    const displayToDos = todos.map(t => {
        if (t.done === true) {
            return (
            
            <div key={t.id} className="line-through">
                <ToDo  t={t}/>
            </div>
        )} 
        else {
            return (
                <div key={t.id}><ToDo  t={t} /></div>
        )}
      })

      const displayTodayToDo = todos.map(t => {
        if(t.prio === "TODAY"){
            return (
                <ToDo key={t.id}  t={t}/>
            )
        }
      })

      const displayWeekToDo = todos.map(t => {
        if(t.prio === "THIS WEEK"){
            return (
                <ToDo key={t.id} t={t}/>
            )
        }
      })

      const displayMonthToDo = todos.map(t => {
        if(t.prio === "THIS MONTH"){
            return (
                <ToDo key={t.id} t={t}/>
            )
        }
      })

      const displayYearToDo = todos.map(t => {
        if(t.prio === "THIS YEAR"){
            return (
                <ToDo key={t.id} t={t}/>
            )
        }
      })
      const thisYear = new Date()
      

    return(
        <>
        {showModal ? 
            <NewToDo setShowModal={setShowModal} setTodos={setTodos} todos={todos} /> : <></>}
            
                <button onClick={()=> setShowModal(!showModal)} 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-full inline-flex items-center">
                    Add
                </button>
                <div className="p-2 font-bold text-4xl">TODAY</div>
                {displayTodayToDo}
            <div className="flex p-2">
                <div className="w-1/2">
                    <div className="font-bold text-4xl">THIS WEEK</div>
                    {displayWeekToDo}
                </div>
                <div className="w-1/2">
                <div className="font-bold text-4xl">THIS MONTH</div>
                    {displayMonthToDo}
                </div>
            </div>
            <div>
            <div className="font-bold text-5xl">{thisYear.getFullYear()}</div>
                {displayYearToDo}
            </div>
       
        </>
    )
}