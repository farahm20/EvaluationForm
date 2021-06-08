import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';

// import { TextField } from "@material-ui/core";
// import { FormControlLabel, TextareaAutosize } from '@material-ui/core';
// import Checkbox from "@material-ui/core/Checkbox";
import TextQuestions from './TextQuestions'
import CheckboxQuestions from './CheckboxQuestions'
import TextFieldQuestions from './TextFieldQuestions'


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

const Questions = () => {
    const questions = Render();

    // const validate = Yup.object({
    //     input: Yup.string()
    //         .max(15, 'Must be 15 characters or less')
    //         .required('Required'),
    // })

    return (
        <Formik
            initialValues={{
                answers: [
                    {
                        input: ""
                    }
                ]
            }}
            // validationSchema={validate}
            onSubmit={values => {
                console.log("On submit: ", values)
            }}
        >
            {/* render={({ values }) => ( */}
            {/* <FieldArray */}
            {/* name="questions" */}
            {/* render={arrayHelpers => ( */}
            <Form >
                <div className="form-control" >
                    <div>
                        {
                            questions.map((question => {
                                {
                                    {
                                        switch (question.format) {
                                            case 'text':
                                                return <TextQuestions
                                                    key={question.id}
                                                    question={question}
                                                    label={question.text}
                                                    type={question.format}
                                                    name={question.ans}
                                                // name={'answers.push.${question.id}.input'}
                                                // name="input"
                                                // onChange={value => arrayHelpers.push(value)}
                                                />
                                            case 'checkbox':
                                                return <CheckboxQuestions
                                                    key={question.id}
                                                    question={question}
                                                    label={question.text}
                                                    type={question.format}
                                                    name={question.ans} />;
                                            case 'textfield':
                                                return <TextFieldQuestions
                                                    key={question.id}
                                                    question={question}
                                                    label={question.text}
                                                    type={question.format}
                                                    name={question.ans} />;
                                            default:
                                                return null;
                                        }
                                    }
                                }
                            }))
                        }
                    </div>
                </div>
                <button className="button" type="submit">Submit</button>
            </Form>
            {/* )} */}
            {/* /> */}
            {/* )} */}
        </Formik >
    )
}

export default Questions