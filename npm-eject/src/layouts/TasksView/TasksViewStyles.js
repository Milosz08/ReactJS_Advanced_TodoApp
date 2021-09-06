/**
 * @file TasksViewStyles.js
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

export const TasksContainer = styled.div`
  width: 100%;
  margin: 40px 0;
  max-height: 300px;
  overflow-y: auto;
`;

export const SingleTask = styled.div`
  display: flex;
  width: calc(100% - 20px);
  background-color: transparent;
  border: none;
  align-items: center;
  font-size: 1.1rem;
  margin: 6px 10px;
  color: var(--mainTextColour);
  padding: 15px;
  opacity: ${props => props.taskFinish || 1};
  :hover {
    background-color: var(--lightGrayColour);
    border-radius: 7px;
  }
`;

export const TaskTitle = styled.div`
  flex-basis: 55%;
  text-align: left;
  text-decoration: ${props => props.taskFinish || 'none'};
  :hover {
    cursor: pointer;
  }
`;

export const TaskPriority = styled.div`
  flex-basis: 25%;
  display: flex;
  align-items: center;
  span:nth-child(1) {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin-right: 15px;
    background-color: ${props => props.priorityColour};
  }
  span:nth-child(2) {
    text-transform: capitalize;
  }
  @media only screen and (max-width: 777px) {
    font-size: 0;
    flex-basis: 10%;
  }
`;

export const TaskDate = styled.div`
  flex-grow: 1;
  font-size: .9rem;
  color: var(--darkGrayColour);
`;

export const Checkbox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  input[type = 'checkbox'] {
    position: relative;
    z-index: 3;
    opacity: 0;
    height: 20px;
    width: 20px;
    cursor: pointer;
    :checked ~ div {
      border-radius: 5px;
      border: 1px solid var(--magentaColour);
      background-color: var(--magentaColour);
      ::after {
        display: block;
      }
    }
  }
  div {
    position: absolute;
    height: 20px;
    width: 20px;
    border-radius: 5px;
    border: 1px solid var(--magentaColour);
    transition: .2s;
    ::after {
      content: '';
      position: absolute;
      display: none;
      left: 6px;
      top: 2px;
      width: 6px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;

export const TaskSetRemove = styled.button`
  border: none;
  font-size: 1.1rem;
  background-color: transparent;
  color: var(--magentaColour);
  cursor: pointer;
  margin-left: 30px;
`;