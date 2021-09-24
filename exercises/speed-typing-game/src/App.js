import React, {useState} from "react"

function App() {

    const [text, setText] = useState("")

    function handleChange(e) {
        const { value } = e.target

        setText(value)
    }

    function countWords(phrase) {
      
        const wordsArr =  phrase.trim().split(" ")
        const count = wordsArr.filter(word => word !== "").length

        console.log("count:", count, wordsArr)
       
        return count
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
                <button onClick={() => countWords(text)}>Start Game! </button>
            </div>
            <h1>Score:</h1>

        </div>
    )

}

export default App