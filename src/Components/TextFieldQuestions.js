import React from 'react'
import { TextField } from "@material-ui/core";
import { useField } from 'formik';

const TextFieldQuestions = ({ question, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <div className="form-control">
                {/* <h3 style={{ color: 'red', }}>{question.id}</h3>
                <h3 style={{ color: 'red', }}> - </h3>
                <h3> {question.text}</h3> */}
                <TextField
                    label={question.text}
                    multiline
                    rowsMax={4}
                    name={question.ans}
                    {...field}
                    {...props}
                />
            </div>
        </div>
    )
}

export default TextFieldQuestions
