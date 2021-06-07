import React from 'react'
import { Checkbox, TextField } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';

const CheckboxQuestions = ({ question }) => {
    console.log("CheckboxQuestions component: ", question)
    const questionOptions = question.options;
    console.log("question Options: ", questionOptions)
    return (
        <div className="form-control">
            <div className="form-question">
                <h3 style={{ color: 'red', }}>{question.id}</h3>
                <h3 style={{ color: 'red', }}> - </h3>
                <h3> {question.text}</h3>
            </div>
            {console.log("in checkbox questions")}
            <div className="form-options">
                {
                    questionOptions.map(
                        (choice, index) => <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    name={choice}
                                    value={choice}
                                />
                            }
                            label={choice}
                        />
                    )
                }
            </div>
        </div>

    )
}

export default CheckboxQuestions
