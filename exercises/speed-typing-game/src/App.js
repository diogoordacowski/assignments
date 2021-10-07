import React, { useState, useEffect, useRef } from "react"

function App() {

    const START_TIME = 15

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(START_TIME)
    const [isTimeRunning, setisTimeRunning] = useState(false)
    const [answer, setAnswer] = useState("tbd")
    const textareaRef = useRef(null)

    function handleChange(e) {
        const { value } = e.target

        setText(value)
    }

    function countWords(phrase) {

        const wordsArr = phrase.trim().split(" ")
        const count = wordsArr.filter(word => word !== "").length

        console.log("count:", count, wordsArr)

        return count
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(prevTime => prevTime - 1)
            }, 1000)

            textareaRef.current.focus()

        } else if (timeRemaining === 0) {
            setisTimeRunning(false)
            setAnswer(countWords(text))
        }
    }, [timeRemaining, isTimeRunning])

    function toggleTimer() {
        if (isTimeRunning === false && timeRemaining > 0) {
            setisTimeRunning(true)

        } else if (isTimeRunning === false && timeRemaining === 0) {
            setTimeRemaining(START_TIME)
            setText("")
            setisTimeRunning(true)
            
        }
    }

    return (
        <div className="gamebox">
            <h1>Speed Typing Game!</h1>
            <textarea
                ref={textareaRef}
                onChange={handleChange}
                name="text"
                value={text}
                disabled={!isTimeRunning}
                />
            <h4>Time Remaining: {timeRemaining} </h4>
            <div className="buttonbox">
                {isTimeRunning ? null : <button onClick={toggleTimer}>

                    {(isTimeRunning === false && timeRemaining === 0) ? "Play Again!" : "Start Game!"}

                </button>}

            </div>
            <h1>Score: {answer} </h1>

        </div>
    )

}

export default App