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

// firebase.firestore().collection('TestingQuestions').add({
//     flag: false,
//     format: "textfield",
//     id: 24,
//     text: "Is there anything you think we missed asking you in the form, in relation to your personal preferences and needs, to be able to match you correctly?",
//     type: 'text'
// })

// firebase.firestore().collection('TestingQuestions').add({
//     flag: true,
//     format: "checkbox",
//     id: 14,
//     options: [1, 2, 3, 4, 5],
//     text: "How well do you think your therapist matches your preferences and needs - described in the form you completed?",
//     type: 'numericalScale'
// })

// firebase.firestore().collection('TestingQuestions').add({
//     flag: true,
//     format: "checkbox",
//     id: 20,
//     options: ["Less than two months", "More than two months, less than six months", "For about 6-12 months", "For about 12-24 months", "More than 24 months"],
//     text: "Before contacting us, how long had you been thinking about seeing a therapist?",
//     type: 'multipleChoice'
// })

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
            initialValues={
                {
                    answers: [{
                        input: { input: '' }
                    }]
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