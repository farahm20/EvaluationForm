import React from 'react'
import { TextField } from "@material-ui/core";
import { useField } from 'formik';

const TextFieldQuestions = ({ question, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <div className="form-control">
                <div className="form-question">

                    <TextField
                        label={question.text}
                        multiline
                        rowsMax={8}
                        name={question.ans}
                        {...field}
                        {...props}
                    />
                </div>
            </div>
        </div>
    )
}

export default TextFieldQuestions
