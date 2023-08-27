import { useState, useEffect } from "react"
export default function EditToDo({setShowEdit, t}) {
    const [toDos, setToDos] = useState([])
    useEffect(() => {
        fetch('/todos')
        .then(r=> {
            if(r.ok) {
                r.json().then(data => {
                    setToDos(data)
                })
            }
        })
    }, [])

    const [formData, setFormData] = useState(t)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedTD = {
            title: formData.title,
            prio: formData.prio,
            done : false
        }
        fetch(`/todos/${t.id}`, {
        method: "PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(updatedTD)
        })
        .then(r=> {
            if(r.ok){
                r.json().then(data => {
                    setShowEdit(false)
                  
                    setToDos([...toDos, data])
                    // how to update state on the one updated t???
                })
            }
        })

    }
    return (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                      <h3 className="text-3xl font=semibold">EDIT DESCRIPTION </h3>
                      <button
                        className="bg-pink-200 mx-2 rounded-full border-0 text-black float-right px-3"
                        onClick={() => setShowEdit(false)}
                      >
                        close
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
    )
}