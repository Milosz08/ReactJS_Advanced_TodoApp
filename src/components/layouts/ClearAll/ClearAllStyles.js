/**
 * @file ClearAllStyles.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief TypeScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "react-js-todo-app"
 * @version "^0.1.0"
 *
 * @dependencies  StylesComponents: "^5.3.1"
 *
 * @date final version: 08/27/2021
 */

import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonTodo = styled.button`
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 10px 10px 0;
  color: var(--magentaColour);
  background-color: transparent;
`;