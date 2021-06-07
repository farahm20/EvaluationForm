import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import { Formik, Form } from 'formik';

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

    return (
        <Formik
            // initialValues={{
            //     input='',
            // }}
            onSubmit={values => {
                console.log("On submit: ", values)
            }}
        >
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
                                                    name="input"
                                                    type={question.format}
                                                />
                                            case 'checkbox':
                                                return <CheckboxQuestions
                                                    key={question.id}
                                                    question={question} />;
                                            case 'textfield':
                                                return <TextFieldQuestions
                                                    key={question.id}
                                                    question={question} />;
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
        </Formik >
    )
}

export default Questions