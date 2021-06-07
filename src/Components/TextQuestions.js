import React from 'react'
import { TextField } from "@material-ui/core";
import { Formik, Form, useField } from 'formik';


const TextQuestions = ({ question, ...props }) => {
    console.log("TextQuestion component: ", question)
    const [field, meta] = useField(props);
    return (
        <div className="form-control">
            {/* <div className="form-question">
                <h3 style={{ color: 'red', }}>{question.id}</h3>
                <h3 style={{ color: 'red', }}> - </h3>
                <h3> {question.text}</h3>
            </div> */}
            <TextField
                {...field}
                {...props}
            />
            {console.log("in text questions")}
        </div>
    )
}

export default TextQuestions
