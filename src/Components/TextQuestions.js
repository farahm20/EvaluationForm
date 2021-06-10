import React from 'react'
import { TextField } from "@material-ui/core";
import { useField } from 'formik';


const TextQuestions = ({ question, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-control">
            <div className="form-question">

                <TextField
                    label={question.text}
                    key={question.id}
                    name={question.ans}
                    {...field}
                    {...props}
                />
            </div>
        </div>
    )
}

export default TextQuestions
