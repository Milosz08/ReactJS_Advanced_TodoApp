/**
 * @file RadioButtons.jsx
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

import React from 'react';

import { RadioContainer, RadioWrapper } from './RadioButtonsStyles';
import { PRIORITY } from '../../../utils/defaultTodos';

/**
 * Constant array that holds all the priority values.
 * @type {(string)[]}
 */
const RADIO_BUTTONS = [ PRIORITY.NONE, PRIORITY.LOW, PRIORITY.MEDIUM, PRIORITY.HIGH ];

/**
 * @details Component responsible for generating the structure of "radio" buttons allowing
 *          to change the importance of a Todo list item.
 *
 * @param taskObject - object that stores information for a single Todo list item
 * @param callback - callback function to set input values
 * @returns {JSX.Element}
 */
const RadioButtons = ({ taskObject, callback }) => {

    const generateRadioButtonsStructure = RADIO_BUTTONS.map(radioButton => (
        <RadioWrapper
            radioColour = {`var(--${radioButton.toLocaleLowerCase()}Priority)`}
            key = {`radio__${radioButton}`}
        >
            <label htmlFor = {`radio__${radioButton}`}>
                <input
                    type = 'radio'
                    id = {`radio__${radioButton}`}
                    checked = {taskObject.radio === radioButton}
                    name = 'radioButtonsSection'
                    onChange = {() => callback({ ...taskObject, radio: radioButton })}
                />
                <span>{radioButton} priority</span>
                <span/>
            </label>
        </RadioWrapper>
    ));

    return (
        <RadioContainer>
            {generateRadioButtonsStructure}
        </RadioContainer>
    );
}

export default RadioButtons;