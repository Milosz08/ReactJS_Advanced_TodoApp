/**
 * @file index.jsx
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
import { Container, Wrapper } from './TodoAppStyles';

import Header from '../layouts/Header/Header';
import TodosInfo from '../layouts/TodosInfo/TodosInfo';
import StoreProvider from '../../store/StoreProvider';
import InjectNewTask from '../layouts/InjectNewTask/InjectNewTask';
import TasksView from '../layouts/TasksView/TasksView';
import ClearAll from '../layouts/ClearAll/ClearAll';
import DetailsModal from '../layouts/DetailsModal/DetailsModal';

/**
 * @details Component responsible for generating the entire structure of the application.
 *
 * @param ifActiveDB - whether the connection to the database is active.
 * @param getDBcallback? - callback function returning an array of objects from the database.
 * @param updateDBcallback? - callback function with updated task table in its parameters.
 *
 * @returns { JSX.Element }
 */
const TodoApp = ({
    ifActiveDB,
    getDBcallback = (() => []),
    updateDBcallback = (() => []),
}) => {

    return (
        <StoreProvider
            propsValues = {{ ifActiveDB, getDBcallback, updateDBcallback }}
        >
            <Container>
                <DetailsModal/>
                <Wrapper>
                    <Header/>
                    <TodosInfo/>
                    <InjectNewTask/>
                    <TasksView/>
                    <ClearAll/>
                </Wrapper>
            </Container>
        </StoreProvider>
    );
}

export default TodoApp;
