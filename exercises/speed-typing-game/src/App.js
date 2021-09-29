import React, {useState, useEffect} from "react"

function App() {

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(10)
    const [isTimeRunning, setisTimeRunning] = useState(false)

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

    useEffect( () => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => { 
                setTimeRemaining (prevTime => prevTime - 1)
            }, 1000)
        } else if (timeRemaining === 0) {
            setisTimeRunning(false)
        }
    }, [timeRemaining, isTimeRunning] ) 
    
    //{() => countWords(text)} - this is to count the words

    return (
        <div className="gamebox">
            <h1>Speed Typing Game!</h1>
            <textarea 
                onChange={handleChange} 
                name="text" 
                value={text} />
            <h4>Time Remaining: {timeRemaining} </h4>
            <div className="buttonbox">
                <button onClick={() => setisTimeRunning(true)}>Start Game! </button>
            </div>
            <h1>Score:</h1>

        </div>
    )

}

export default App