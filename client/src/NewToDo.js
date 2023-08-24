import { useState } from "react";


export default function NewToDo({setShowModal, setTodos, todos}){
    const newToDo = {
        title: "",
        done: false,
        prio: ""
    }
    const [formData, setFormData] = useState(newToDo)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const postingToDo = {
            title: formData.title,
            done: false,
            prio: formData.prio
        }
        fetch('/todos', {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(postingToDo)
        })
        .then(r=> {
            if(r.ok){
                r.json().then(data=> {
                    console.log(data)
                    setTodos([...todos, data])
                    setShowModal(false)
                })
            }
        })
    }




    return (
        
            <>
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                      <h3 className="text-3xl font=semibold">ADD IT TO THE LIST </h3>
                      <button
                        className="bg-transparent border-0 text-black float-right px-3"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                          x
                        </span>
                      </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                        <label className="block text-black text-med font-bold mb-1">
                          What do you need to do?
                        </label>
                        <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-1 text-black" id="title" value={formData.title} />
                        <label className="block text-black text-med font-bold mb-1">
                          When?
                        </label>
                        <select onChange={handleChange} id="prio" className="text-center shadow block appearance-none w-full  border border-gray-200 text-gray-700 py-2 px-1 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>SELECT</option>
                            <option value="TODAY">TODAY</option>
                            <option value="THIS WEEK">THIS WEEK</option>
                            <option value="THIS MONTH" >THIS MONTH</option>
                            <option value="THIS YEAR">THIS YEAR</option>
                        </select>
                      
                      <button
                        className="text-red-500 background-transparent font-bold uppercase m-2 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    
                      >
                        Close
                      </button>
                      <button
                        className="text-white m-2 bg-green-800 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                      >
                        Submit
                      </button>
                   
                    </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
        

    )
}