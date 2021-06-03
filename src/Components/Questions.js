import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { Checkbox, TextField } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';

function Render() {
    const [question, setQuestions] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection("TestingQuestions")
            .orderBy("id", "asc")
            .onSnapshot((snapshot) => {
                const getQuestion = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setQuestions(getQuestion)
            })
    }, [])

    return question
}

// function renderCheckboxOptions(questions) {
//     console.log(questions);
//     let questionOptions = [];

//     questions.map((question => {
//         questionOptions = question.options
//         console.log("in side map", questionOptions)
//     }

//     ))
//     console.log("out side map", questionOptions)
//     return questionOptions;
// }


const Questions = () => {
    const questions = Render()
    console.log(questions)


    return (
        <Formik>
            <Form onSubmit={async (values) => {
                console.log("Onsubmit", values);
            }}>
                <div className="form-control" >

                    {/* {typeResult ? <TextQuestions /> : <CheckboxQuestions />} */}
                    {
                        questions.map((question => (
                            <TextField
                                key={question.id}
                                id={question.id}
                                label={question.text}
                                name={question.type}
                            />
                        )))

                    }
                </div>
            </Form>
        </Formik >
    )
}

export default Questions