import React from 'react'
import { Checkbox, TextField } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';

const TextFieldQuestions = ({ question }) => {
    return (
        <div>
            <div className="form-question">
                <h3 style={{ color: 'red', }}>{question.id}</h3>
                <h3 style={{ color: 'red', }}> - </h3>
                <h3> {question.text}</h3>
            </div>
            {console.log("in text questions")}
        </div>
    )
}

export default TextFieldQuestions
