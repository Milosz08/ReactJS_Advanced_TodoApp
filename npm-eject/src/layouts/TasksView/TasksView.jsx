/**
 * @file TasksView.js
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { StoreContext, ACTIONS } from '../../utils/StoreProvider';
import MONTHS from '../../utils/months';

import {
    TasksContainer, SingleTask, TaskTitle, TaskPriority, TaskDate, TaskSetRemove, Checkbox
} from './TasksViewStyles';

/**
 * Function generates a date string based on the passed object in the arguments.
 * @param dateObject - object with date passed in parameters
 * @returns {string}
 */
const generateDateStructure = dateObject => {
    const month = MONTHS.find(month => month.id === dateObject.getMonth());
    const day = dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate();
    return `${month.name.substring(0, 3)} ${day}`;
}

/**
 * @details Component responsible for generating the structure of all Todo tasks in the main container.
 *
 * @returns {JSX.Element}
 */
const TasksView = () => {

    const { state, dispatch, setModalOpen } = useContext(StoreContext);

    /**
     * Dispatch function responsible for setting the end of the task.
     * @param id - Todo task id value.
     */
    const handleFinishTask = id => dispatch({ type: ACTIONS.FINISH, id });

    /**
     * Dispatch function responsible for removing the task.
     * @param id - Todo task id value.
     */
    const handleRemoveTash = id => dispatch({ type: ACTIONS.REMOVE, id });

    /**
     * SetState function responsible for opening the window for editing the task.
     * @param id - Todo task id value.
     */
    const handleOpenModal = id => setModalOpen({ ifOpen: true, id });

    /**
     * All Todo tasks structure.
     */
    const generateAllTasks = state.map(task => (
        <SingleTask
            taskFinish = {task.statusEnd ? '.5' : '1'}
            key = {task._id}
            role = 'button'
        >
            <TaskTitle
                taskFinish = {task.statusEnd ? 'line-through' : 'none'}
                onClick = {() => handleOpenModal(task._id)}
            >
                {task.title}
            </TaskTitle>
            <TaskPriority priorityColour = {`var(--${task.priority.toLocaleLowerCase()}Priority)`}>
                <span/>
                <span>{task.priority} Priority</span>
            </TaskPriority>
            <TaskDate>{generateDateStructure(task.initDate)}</TaskDate>
            <Checkbox>
                <input
                    type = 'checkbox'
                    checked = {task.statusEnd}
                    onChange = {() => handleFinishTask(task._id)}
                    title = 'Mark as done'
                />
                <div/>
            </Checkbox>
            <TaskSetRemove
                onClick = {() => handleRemoveTash(task._id)}
                title = 'Remove Todo'
            >
                <FontAwesomeIcon icon = {faTrash}/>
            </TaskSetRemove>
        </SingleTask>
    ));

    return (
        <TasksContainer>
            {generateAllTasks}
        </TasksContainer>
    );
}

export default TasksView;