/**
 * @file HeaderStyles.js
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

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;

export const HeaderTitle = styled.div`
  text-transform: uppercase;
  color: var(--mainTextColour);
`;

export const HeaderLink = styled.div`
  font-size: 1rem;
  a {
    font-size: 1.5rem;
    color: var(--mainTextColour);
  }
`;