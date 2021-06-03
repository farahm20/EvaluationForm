import React from 'react'

const TextQuestions = ({ question }) => {
    console.log("TextQuestion component: ", question)
    return (
        <div>
            <h3>TextQuestions</h3>
            {console.log("in text questions")}
        </div>
    )
}

export default TextQuestions
