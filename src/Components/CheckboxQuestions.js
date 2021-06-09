import { React, useState } from 'react'
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';
import { useField } from 'formik';

const CheckboxQuestions = ({ question, ...props }) => {
    const [field, meta] = useField(props);
    // console.log(field)
    const questionOptions = question.options;
    const toggle = (event) => {
        console.log(event.target.value)
    };

    const [isChecked, setIsChecked] = useState();

    const isCheckboxChecked = (index) => {
        setIsChecked(index)
    }

    return (
        <div className="form-control">
            {/* <div className="form-question">
                <h3 style={{ color: 'red', }}>{question.id}</h3>
                <h3 style={{ color: 'red', }}> - </h3>
                <h3> {question.text}</h3>
            </div> */}
            <div className="form-options">
                <label className="form-question">{question.text}</label>
                {
                    questionOptions.map(
                        (choice, index) => <FormControlLabel
                            key={choice}
                            control={
                                <Checkbox
                                    // name={choice}
                                    type="checkbox"
                                    value={choice}
                                    name={question.ans}
                                    checked={isChecked == index}
                                    onClick={() => isCheckboxChecked(index)}
                                // onChange={event => toggle(event)}
                                // {...props}
                                />
                            }
                            label={choice}
                            {...field}
                        />
                    )
                }
            </div>
        </div>

    )
}

export default CheckboxQuestions
