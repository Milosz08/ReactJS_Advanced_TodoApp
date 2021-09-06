/**
 * @file InjectNewTask.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief TypeScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "react-js-todo-app"
 * @version "^0.1.0"
 *
 * @dependencies  ReactJS: "^17.0.2"
 *
 * @date final version: 08/27/2021
 */

import React, { useContext, useState } from 'react';
import { PRIORITY } from '../../utils/defaultTodos';

import { Input, InputContainer, Button, Arrow } from './InjectNewTaskStyles';
import { StoreContext, ACTIONS } from '../../utils/StoreProvider';

/**
 * @details Component responsible for generating the input field for a new task to the Todo list.
 *
 * @returns {JSX.Element}
 */
const InjectNewTask = () => {

    const { dispatch } = useContext(StoreContext);

    /**
     * Input state value and function to change this state.
     */
    const [ inputValue, setInputValue ] = useState({ value: '', error: false });

    /**
     * Function run when submitting the form (submit button).
     * @param e - event
     */
    const handleSubmit = e => {
        e.preventDefault();
        if(inputValue.value.length < 1 || inputValue.value.length > 50) {
            setInputValue({ ...inputValue, error: true });
        } else {
            const newTask = {
                _id: Math.floor(Math.random() * 1000),
                title: inputValue.value,
                description: '',
                priority: PRIORITY.NONE,
                initDate: new Date(),
                statusEnd: false,
            };
            dispatch({ type: ACTIONS.ADD, newTask });
            setInputValue({ ...inputValue, value: '' });
        }
    }

    /**
     * Function that changes the content of the input field (status update).
     * @param target - event.target (destructurized)
     */
    const handleInput = ({ target }) => setInputValue({ value: target.value, error: false });

    return (
        <InputContainer>
            <form onSubmit = {handleSubmit}>
                <Input
                    value = {inputValue.value}
                    onChange = {handleInput}
                    placeholder = 'Enter new task'
                    onErrorChangeColour = {inputValue.error ? 'var(--highPriority)' : 'var(--magentaColour)'}
                />
                <Button
                    type = 'submit'
                    title = 'Add new Todo'
                >
                    <Arrow
                        onErrorChangeColour = {inputValue.error ? 'var(--highPriority)' : 'var(--magentaColour)'}
                    />
                </Button>
            </form>
        </InputContainer>
    );
}

export default InjectNewTask;