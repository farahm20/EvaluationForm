import React, { useState, useEffect } from 'react'
import firebase from '../firebase'
import { Formik, Form } from 'formik';
import { Checkbox, TextField } from "@material-ui/core";
import { FormControlLabel } from '@material-ui/core';
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
    const questions = Render()
    console.log(questions)


    return (
        <Formik>
            <Form >
                <div className="form-control" >
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
                                                />
                                            case 'checkbox':
                                                return <CheckboxQuestions />;
                                            case 'textfield':
                                                return <TextFieldQuestions />;
                                            default:
                                                return null;
                                        }
                                    }
                                }
                            }))
                        }
                    </div>
                </div>

            </Form>
        </Formik >
    )
}

export default Questions