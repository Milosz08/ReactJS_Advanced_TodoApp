/**
 * @file TodosInfo.js
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

import React, { useContext } from 'react';
import { StoreContext } from '../../utils/StoreProvider';

import { TodosInfoContainer, TodosInfoSection } from './TodosInfoStyles';

/**
 * @details Component responsible for generating three blocks informing about the number of: all tasks,
 *          completed tasks and remaining tasks to be completed.
 *
 * @returns {JSX.Element}
 */
const TodosInfo = () => {

    const { state } = useContext(StoreContext);

    /**
     * Number of completed tasks.
     */
    const successCount = state.filter(task => task.statusEnd).length;

    /**
     * Number of remaining tasks to be completed (based on all tasks).
     * @type {number}
     */
    const pendingCount = state.length - successCount;

    /**
     * Object on the basis of which the JSX structure is generated.
     */
    const allSections = [
        {
            backgroundColour: 'var(--totalBackground)',
            foregroundColour: 'var(--totalForeground)',
            message: `total : ${state.length}`
        },
        {
            backgroundColour: 'var(--successBackground)',
            foregroundColour: 'var(--successForeground)',
            message: `success : ${successCount}`
        },
        {
            backgroundColour: 'var(--pendingBackground)',
            foregroundColour: 'var(--pendingForeground)',
            message: `pending : ${pendingCount}`
        }
    ];

    const todosInfoStructure = allSections.map(section => (
        <TodosInfoSection
            key = {section.message}
            backgroundCol = {section.backgroundColour}
            foregroundCol = {section.foregroundColour}
        >
            {section.message}
        </TodosInfoSection>
    ));

    return (
        <TodosInfoContainer>
            {todosInfoStructure}
        </TodosInfoContainer>
    );
}

export default TodosInfo;