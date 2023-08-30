import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Time from "./Time"
import ToDos from "./ToDos"

export default function Home () {
    const [quotes, setQuotes] = useState([])
    const [randomQuote, setRandomQuote] = useState("")

    useEffect(()=> {
        fetch('/quotes')
        .then(r => {
            if (r.ok){
                r.json().then(data => {
                    setQuotes(data)
                    setRandomQuote(data[Math.floor(Math.random() * quotes.length)])
                 } )
            }
            else {
                console.log("what is going on????")
            }
        })
    }, [])

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

    const handleEditTD = (tdObj) => {
        const updatedTDs = todos.map( t => {
            if(t.id === tdObj.id){
                return tdObj
            } else {
                return t
            }
        }) 
        setTodos(updatedTDs)
    }
    
    return (
        <div>
            <div className="">
                <div className = "m-auto p-5">
                    <Time />
                </div>

            <div className="sm:flex justify-between sm:px-5">
                <div className="w-full sm:w-3/4 p-2 text-center">
                    <ToDos todos={todos} setTodos={setTodos} handleEditTD={handleEditTD} />
                </div>
                <div className="w-full sm:w-1/4 text-right p-4 sm:px-5">
                    <div className="sm:text-3xl py-3 italic font-bold">Did you drink water today?</div>
                    <div className="py-3">{randomQuote.quote}.</div>
                    <div className="py-3">
                        <NavLink to='/advice' className="text-gray-300 text-right hover:text-teal-400 hover:cursor-pointer">See all ♡</NavLink>
                    </div>
                    <div className="flex items-center justify-center text-orange-700">
                        <p>don't forget to move around a little! Take a break, go for a walk.</p>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}