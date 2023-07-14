export default function AddAdvice ({setShowModal}) {



    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <div>
                <button onClick={() => setShowModal(false) }
                className="flex items-center m-5 px-3 py-2 border rounded-full text-teal-500 border-teal-400 hover:bg-orange-500 hover:text-white hover:border-white">
                    back to advice
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <button >Give it to me lol</button>
            </form>
        </div>
    )
     
} 

// install formik
// add a way to add advice 
// needs to be a modal!!!!!!!!
    