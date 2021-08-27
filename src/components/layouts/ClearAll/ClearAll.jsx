/**
 * @file ClearAll.jsx
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
import { ButtonsContainer, ButtonTodo } from './ClearAllStyles';
import { StoreContext, ACTIONS } from '../../../store/StoreProvider';

/**
 * @details Component that generates two buttons to manage the entire Todo list. One is responsible
 *          for removing all items and the other is for setting all items to be "done".
 *
 * @returns { JSX.Element }
 */
const SetAll = () => {

    const { dispatch } = useContext(StoreContext);

    /**
     * Delete all Todo list items
     */
    const handleRemoveAll = () => dispatch({ type: ACTIONS.REMOVE_ALL });

    /**
     * Set all items on your Todo list as "done".
     */
    const handleDoneAll = () => dispatch({ type: ACTIONS.DONE_ALL });

    return (
        <ButtonsContainer>
            <ButtonTodo
                onClick = {handleRemoveAll}
                title = 'Remove all Todos'
            >
                Remove all Todos
            </ButtonTodo>
            <ButtonTodo
                onClick = {handleDoneAll}
                title = 'Remove all Todos'
            >
                Mark all Todos as Done
            </ButtonTodo>
        </ButtonsContainer>

    );
}

export default SetAll;