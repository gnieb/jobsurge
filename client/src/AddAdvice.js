export default function AddAdvice ({setShowModal}) {
    return (
        <div>
            <div>
                <button onClick={() => setShowModal(false) }
                className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:bg-orange-500 hover:text-white hover:border-white">
                    back to advice
                </button>
            </div>
            <form>
                <button >Give it to me lol</button>
            </form>
        </div>
    )
     
} 

// install formik
// add a way to add advice 