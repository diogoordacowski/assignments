import React, { useState } from "react"


function Form() {

    const [inputInfo, setName] = useState({ fName: "", lName: "" })
    const [contacts, setContacts] = useState([])

    function handleChange(e) {
        const { name, value } = e.target

        setName(prevInputInfo => ({...prevInputInfo, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()

        setContacts(prevContacts => [...prevContacts, inputInfo])
    }

    const allContacts = contacts.map((contact, i) => <h3 key={i}>{contact.fName} {contact.lName}</h3>)

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="fName" 
            value={inputInfo.fName} 
            onChange={handleChange} 
            placeholder="First Name" />

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