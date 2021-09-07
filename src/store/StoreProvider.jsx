/**
 * @file StoreProvider.js
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

import React, { createContext, useReducer, useState } from 'react';
import DEFAULT_TODOS from '../utils/defaultTodos';

/**
 * All useDispatch actions constant JS object.
 */
export const ACTIONS = {
    ADD: 'ADD',
    EDIT: 'EDIT',
    REMOVE: 'REMOVE',
    REMOVE_ALL: 'REMOVE_ALL',
    DONE_ALL: 'DONE_ALL',
    FINISH: 'FINISH'
};

/**
 * Create the context of the store. Function exported and used to destructurize context members.
 * @type {React.Context<null>}
 */
export const StoreContext = createContext(null);

/**
 * @details Component that stores the state and calls appropriate methods to manage the state (dispatcher, reducer).
 *
 * @param children - all nodes of the virtual DOM React tree covered by the Provider.
 * @param propsValues - all props values inheriting from Index component.
 *
 * @returns {JSX.Element}
 */
const StoreProvider = ({ children, propsValues }) => {

    const { ifActiveDB, getDBcallback, updateDBcallback } = propsValues;

    /**
     * The reducer function used in useReducer hook. Based on action, function modify actual state.
     * @param state - current state
     * @param action - type of action to be taken by the reducer.
     */
    const taskReducer = (state, action) => {
        const { ADD, EDIT, REMOVE, REMOVE_ALL, DONE_ALL, FINISH } = ACTIONS;
        switch(action.type) {
            case ADD:
                const returnADD = [action.newTask].concat(state);
                if(ifActiveDB) { updateDBcallback(null, ADD, null) }
                return returnADD;
            case REMOVE:
                const returnREMOVE = state.filter(task => task._id !== action.id);
                if(ifActiveDB) { updateDBcallback(null, REMOVE, action.id) }
                return returnREMOVE;
            case EDIT:
                const editCopy = [...state];
                const editTaskIndex = state.findIndex(task => task._id === action.id);
                editCopy[editTaskIndex] = action.editTask;
                if(ifActiveDB) { updateDBcallback(editCopy[editTaskIndex], EDIT, action.id) }
                return editCopy;
            case FINISH:
                const finishCopy = [...state];
                const finishTaskIndex = state.findIndex(task => task._id === action.id);
                finishCopy[finishTaskIndex].statusEnd = finishCopy[finishTaskIndex].statusEnd ? false : true;
                if(ifActiveDB) { updateDBcallback(finishCopy[finishTaskIndex], EDIT, action.id) }
                return finishCopy;
            case REMOVE_ALL:
                if(ifActiveDB) { updateDBcallback(state, 'REMOVE_ALL', null) }
                return [];
            case DONE_ALL:
                const returnDONE_ALL = state.map(task => ({ ...task, statusEnd: true }));
                if(ifActiveDB) { updateDBcallback(returnDONE_ALL, 'EDIT_ALL', null) }
                return returnDONE_ALL;
            default:
                throw new Error(`Unexpected reducer action. ${action.type} action not exist.`);
        }
    }

    const [ state, dispatch ] = useReducer(taskReducer, ifActiveDB ? getDBcallback() : DEFAULT_TODOS);
    const [ modalOpen, setModalOpen ] = useState({ ifOpen: false, id: '' });

    return (
        <StoreContext.Provider
            value = {{
                state, dispatch,
                modalOpen, setModalOpen
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;