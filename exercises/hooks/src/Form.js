import React, { useRef, useState } from "react"


function Form() {

    const [inputInfo, setName] = useState({ fName: "", lName: "" })
    const [contacts, setContacts] = useState([])
    const inputRef = useRef(null)

    function handleChange(e) {
        const { name, value } = e.target

        setName(prevInputInfo => ({...prevInputInfo, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()

        setContacts(prevContacts => [...prevContacts, inputInfo])
        setName({ fName: "", lName: "" })
        console.log(inputRef) //notice the object that has a current property
        inputRef.current.focus() //the built-in focus() method on the object that refocuses on the element that has the useRef
    }

    const allContacts = contacts.map((contact, i) => <h3 key={i}>{contact.fName} {contact.lName}</h3>)

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="fName" 
            value={inputInfo.fName} 
            onChange={handleChange} 
            placeholder="First Name"
            ref= {inputRef} />

            <input type="text" 
            name="lName" 
            value={inputInfo.lName} 
            onChange={handleChange} 
            placeholder="Last Name" />

            <button>Add Contact</button>
            <br />
        </form>
        {allContacts}
        </>
    )

}


export default Form