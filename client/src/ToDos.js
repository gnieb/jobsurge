import { useState } from "react"
import ToDo from "./ToDo"
import NewToDo from "./NewToDo"

export default function ToDos({todos, setTodos, handleEditTD}){
    const [showModal, setShowModal] = useState(false)
    console.log(todos)

    const removeToDo = (tObj) => {
        const filterToDos = todos.filter(t => t.id !== tObj.id )
        setTodos(filterToDos)
    }

    const displayTodayToDo = todos.map(t => {
    if(t.prio === "TODAY"){
        return (
            <ToDo removeToDo={removeToDo} handleEditTD={handleEditTD} setTodos={setTodos} todos={todos} key={t.id}  t={t}/>
        )
    }
    })

    const displayWeekToDo = todos.map(t => {
    if(t.prio === "THIS WEEK"){
        return (
            <ToDo removeToDo={removeToDo} handleEditTD={handleEditTD} setTodos={setTodos} todos={todos} key={t.id} t={t}/>
        )
    }
    })

    const displayMonthToDo = todos.map(t => {
    if(t.prio === "THIS MONTH"){
        return (
            <ToDo removeToDo={removeToDo} handleEditTD={handleEditTD} setTodos={setTodos} todos={todos} key={t.id} t={t}/>
        )
    }
    })

    const displayYearToDo = todos.map(t => {
        if(t.prio === "THIS YEAR"){
            return (
                <ToDo removeToDo={removeToDo} handleEditTD={handleEditTD} setTodos={setTodos} todos={todos} key={t.id} t={t}/>
            )
        }
      })
      
    const thisYear = new Date()
      
    return(
        <>
        {showModal ? 
            <NewToDo setShowModal={setShowModal} setTodos={setTodos} todos={todos} /> : <></>}
            
                
                <div className="py-5 font-bold text-4xl border">TODAY
                {displayTodayToDo}
                </div>
            <div className="flex p-2">
                <div className="w-1/2 border py-5">
                    <div className="font-bold text-4xl ">THIS WEEK</div>
                    {displayWeekToDo}
                </div>
                <div className="w-1/2 border py-5">
                <div className="font-bold text-4xl">THIS MONTH</div>
                    {displayMonthToDo}
                </div>
            </div>
            <div className="border py-5">
            <div className="font-bold text-5xl ">{thisYear.getFullYear()}</div>
                {displayYearToDo}
            </div>
            <button onClick={()=> setShowModal(!showModal)} 
                className="m-2 shadow bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-full inline-flex items-center">
                    Add
            </button>
        </>
    )
}