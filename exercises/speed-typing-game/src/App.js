import React, {useState} from "react"

function App() {

    const [text, setText] = useState("")

    function handleChange(e) {
        const { value } = e.target

        setText(value)
    }

    return (
        <div class="gamebox">
            <h1>Speed Typing Game!</h1>
            <textarea 
                onChange={handleChange} 
                name="text" 
                value={text} />
            <h4>Time Remaining:</h4>
            <div class="buttonbox">
                <button>Start Game! </button>
            </div>
            <h1>Score:</h1>

        </div>
    )

}

export default App