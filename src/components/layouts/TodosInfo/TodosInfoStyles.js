/**
 * @file TodosInfoStyles.js
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

export const TodosInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 30px 0 20px 0;
`;

export const TodosInfoSection = styled.div`
  padding: 5px 10px;
  background-color: ${props => props.backgroundCol || '#000'};
  text-transform: uppercase;
  border-radius: 5px;
  font-size: .8rem;
  font-weight: 600;
  color: ${props => props.foregroundCol || '#fff'};
`;