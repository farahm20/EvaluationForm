import React from 'react'
import { TextField } from "@material-ui/core";
import { useField } from 'formik';


const TextQuestions = ({ question, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-control">
            {/* <div className="form-question">
                <h3 style={{ color: 'red', }}>{question.id}</h3>
                <h3 style={{ color: 'red', }}> - </h3>
                <h3> {question.text}</h3>
            </div> */}
            <TextField
                label={question.text}
                key={question.id}
                name={question.ans}
                {...field}
                {...props}
            />

        </div>
    )
}

export default TextQuestions
