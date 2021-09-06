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
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

import Header from './layouts/Header/Header';
import TodosInfo from './layouts/TodosInfo/TodosInfo';
import StoreProvider from './utils/StoreProvider';
import InjectNewTask from './layouts/InjectNewTask/InjectNewTask';
import TasksView from './layouts/TasksView/TasksView';
import ClearAll from './layouts/ClearAll/ClearAll';
import DetailsModal from './layouts/DetailsModal/DetailsModal';

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, input, button, textarea {
        font-family: 'Ubuntu', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    :root {
        --mainTextColour: #535353;
        --magentaColour: #5E72E4;
        --darkenMagentaColour: #4451a8;
        --placeholderColour: #C4C4C4;
        --lightGrayColour: #F4F5F7;
        --lightLightGrayColour: #fcfcfc;
        --darkGrayColour: #B3B2B2;
        --normalGrayColour: #898989;
        --darkenGrayColour: #ECEBEB;
    
        --totalBackground: #E5E7FD;
        --totalForeground: #5D62C0;
        --successBackground: #CBFADF;
        --successForeground: #5a8270;
        --pendingBackground: #FFE4DC;
        --pendingForeground: #CF5C39;
    
        --nonePriority: #5E72E4;
        --lowPriority: #62AF62;
        --mediumPriority: #F5CB0D;
        --highPriority: #E22B2B;
    }
    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-track {
        background: var(--lightGrayColour);
    }
    ::-webkit-scrollbar-thumb {
        background: var(--darkGrayColour);
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #00C4C4, #632EB8);
    height: 100vh;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 900px;
    border-radius: 7px;
    background-color: #fff;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, .2);
    padding: 30px;
    margin: 0 15px;
`;

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
            <GlobalStyles/>
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

TodoApp.propTypes = {
    ifActiveDB: PropTypes.bool.isRequired,
    getDBcallback: PropTypes.func,
    updateDBcallback: PropTypes.func
}

export default TodoApp;