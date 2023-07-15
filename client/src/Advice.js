import { useEffect, useState } from "react"

import { Modal } from "react-bootstrap"
import { Form } from "react-bootstrap"


export default function Advice () {
    const [advice, setAdvice] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        fetch('/quotes')
            .then(r => {
                if (r.ok) {
                    r.json().then((data) => setAdvice(data))
                }
                else {
                    console.log("Error - check request and try again")
                }
            })
    }, [])

    const displayAdvice = advice.map(a => {
        return (
            <div key={a.id} className="p-10">
                <h1 className="text-6xl">{a.quote}</h1>
                <p className="text-right ">- {a.by}</p>
            </div>
        )
    })

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className="static">
           
            <div className="fixed top-20 left-4 m-10 ">
                Leave me your wisdom 
                <button onClick={() => setShowModal(true) } className="bg-teal-100 hover:bg-orange-500 text-gray-800 font-bold rounded-full inline-flex items-center content-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </button>
           </div>
        <div className="flex justify-center m-5 p-8 ">
            <div className="flex-col w-2/3">
            {displayAdvice}
            </div>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header >
                <Modal.Title>Share your wisdom with me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>Advice</Form.Label>
                        <Form.Control type="text"></Form.Control>
                        <button className="text-sm px-4 py-2 leading-none border rounded text-white bg-orange-500 border-white hover:border-transparent hover:bg-teal-500 mt-4 lg:mt-0">Add Yours</button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <button onClick={()=> setShowModal(false)} >
                    Cancel
                </button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}