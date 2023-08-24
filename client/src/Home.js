import { useEffect, useState } from "react"
import Advice from "./Advice"
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

    
    
    return (
        <div>
            <div className="">
                <div className = "m-5 p-5">
                    <Time />
                </div>

            <div className="flex justify-between px-5">
                <div className="w-1/2 p-2 px-5 bg-gray-200 text-center">
                    <ToDos todos={todos} />
                </div>
                <div className="w-1/2 text-right px-5">
                    <div className="text-3xl py-3">Did you drink water today?</div>
                    <div className="py-3">{randomQuote.quote}</div>
                    <div className="py-3">
                        <NavLink to='/advice' className="text-gray-300 text-right hover:text-teal-400 hover:cursor-pointer">See all ♡</NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <p>don't forget to move around a little! Take a break, go for a walk.</p>
        </div>
        </div>
    )
}