/**
 * @file DetailsModal.js
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

import React, { useEffect, useContext, useState } from 'react';
import { StoreContext, ACTIONS } from '../../utils/StoreProvider';

import RadioButtons from './RadioButtons';

import { Input } from '../InjectNewTask/InjectNewTaskStyles';
import { HeaderContainer } from '../Header/HeaderStyles';
import {
    ModalContainer, ModalWrapper, HeaderTitle, CloseButton, Separator, ChangeSection, Textarea, PseudoText,
    InputsContainer, ProrityButton, ProrityWrapper, SubmitButtonsContainer, Button
} from './DetailsModalStyles';

/**
 * Max and min number of characters that the user can enter into the "textarea" field.
 * @type {number}
 */
const MIN_LENGTH_DESCRIPTION = 10;
const MAX_LENGTH_DESCRIPTION = 300;

/**
 * Max and min number of characters that the user can enter into the "input" field.
 * @type {number}
 */
const MIN_LENGTH_INPUT = 10;
const MAX_LENGTH_INPUT = 50;

/**
 * @details Component responsible for generating a "Modal" window that allows you to make changes to a Todo element.
 *
 * @returns {JSX.Element}
 */
const DetailsModal = () => {

    const { state, dispatch, modalOpen, setModalOpen } = useContext(StoreContext);

    /**
     * Hooks responsible for animating the appearance and disappearance of the modal.
     */
    const [ opacity, setOpacity ] = useState('0');
    const [ display, setDisplay ] = useState('none');

    /**
     * Hooks responsible for validating and storing information from inputs.
     */
    const [ inputsValues, setInputsValues ] = useState({ input: '', textarea: '', radio: '' });
    const [ errors, setErrors ] = useState({ input: false, textarea: false });

    /**
     * Hook responsible for showing / hiding the window with the priority of the Todo list item.
     */
    const [ openPriority, setOpenPriority ] = useState(false);

    /**
     * Function responsible for closing Modal.
     */
    const handleCloseModal = () => {
        setOpacity('0');
        setTimeout(() => setDisplay('none'), 200);
        setModalOpen({ ifOpen: false, id: '' });
    }

    /**
     * Function run when submitting the form (submit button).
     * @param e - event.
     */
    const handleOnSubmit = e => {
        e.preventDefault();
        const { input, textarea } = inputsValues;
        if(input.length < MIN_LENGTH_INPUT || input.length > MAX_LENGTH_INPUT || textarea.length < MIN_LENGTH_DESCRIPTION) {
            let inputBool = false, textareaBool = false;
            if(input.length < MIN_LENGTH_INPUT || input.length > MAX_LENGTH_INPUT) {
                inputBool = true;
            }
            if(textarea.length < MIN_LENGTH_DESCRIPTION) {
                textareaBool = true;
            }
            setErrors({ input: inputBool, textarea: textareaBool });
        } else {
            const editObject = state.find(task => task._id === modalOpen.id);
            const editTask = {
                _id: modalOpen.id,
                title: inputsValues.input,
                description: inputsValues.textarea,
                priority: inputsValues.radio,
                initDate: editObject.initDate,
                statusEnd: editObject.statusEnd
            };
            dispatch({ type: ACTIONS.EDIT, id: modalOpen.id, editTask });
            handleCloseModal();
        }
    }

    useEffect(() => {
        if(modalOpen.ifOpen) {
            setDisplay('flex');
            const usedTask = state.find(task => task._id === modalOpen.id);
            setInputsValues({
                input: usedTask.title, textarea: usedTask.description, radio: usedTask.priority
            });
            setTimeout(() => setOpacity('1'), 200);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalOpen.ifOpen]);

    return (
        <ModalContainer visible = {display} opacity = {opacity}>
            <form onSubmit = {handleOnSubmit} noValidate>
                <ModalWrapper
                    opacity = {opacity}
                    translate = {`translateY(${opacity === '1' ? '0' : '10'}px)`}
                >
                    <HeaderContainer>
                        <HeaderTitle>
                            Task Details
                        </HeaderTitle>
                        <CloseButton
                            onClick = {handleCloseModal}
                            title = 'Close Modal'
                            type = 'button'
                        >
                            <span/>
                        </CloseButton>
                        <Separator/>
                    </HeaderContainer>
                    <ChangeSection>
                        <Input
                            value = {inputsValues.input}
                            onChange = {({ target }) => setInputsValues({ ...inputsValues, input: target.value })}
                            placeholder = 'Task title'
                            onErrorChangeColour = {errors.input ? 'var(--highPriority)' : 'var(--magentaColour)'}
                        />
                        <InputsContainer>
                            <Textarea
                                value = {inputsValues.textarea}
                                onChange = {({ target }) => setInputsValues({ ...inputsValues, textarea: target.value })}
                                placeholder = 'Task description'
                                rows = {3}
                                error = {errors.textarea}
                                minLength = {MIN_LENGTH_DESCRIPTION}
                                maxLength = {MAX_LENGTH_DESCRIPTION}
                            />
                            <PseudoText>{inputsValues.textarea.length}/{MAX_LENGTH_DESCRIPTION}</PseudoText>
                        </InputsContainer>
                    </ChangeSection>
                    <ProrityButton
                        onClick = {() => setOpenPriority(prevState => !prevState)}
                        type = 'button'
                        activeForeground = {openPriority ? '#fff' : 'var(--magentaColour)'}
                        activeBackground = {openPriority ? 'var(--magentaColour)' : '#fff'}
                    >
                        Set Task Priority
                    </ProrityButton>
                    <ProrityWrapper display = {openPriority ? 'flex' : 'none'}>
                        <RadioButtons
                            taskObject = {inputsValues}
                            callback = {setInputsValues}
                        />
                    </ProrityWrapper>
                    <SubmitButtonsContainer>
                        <Button
                            typeCSS = 'close'
                            type = 'button'
                            onClick = {handleCloseModal}
                            title = 'Close Modal'
                        >close modal</Button>
                        <Button
                            typeCSS = 'send'
                            type = 'submit'
                            title = 'Update Todo Element'
                        >save changes</Button>
                    </SubmitButtonsContainer>
                </ModalWrapper>
            </form>
        </ModalContainer>
    );
}

export default DetailsModal;