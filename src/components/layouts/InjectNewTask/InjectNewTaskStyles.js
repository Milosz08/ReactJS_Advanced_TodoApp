/**
 * @file InjectNewTaskStyles.js
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

export const InputContainer = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 10px;
  margin-right: -40px;
  border: none;
  border-bottom: 1px solid ${props => props.onErrorChangeColour || 'var(--magentaColour)'};
  font-size: 1.1rem;
  color: ${props => props.onErrorChangeColour || 'var(--mainTextColour)'};
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  transition: .2s background-color ease-in-out;
  :focus {
    outline: none;
    background-color: var(--lightLightGrayColour);
  }
  ::placeholder {
    color: var(--placeholderColour);
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: transparent;
  position: absolute;
  width: 40px;
  height: 40px;
  transform: translateX(0);
  transition: .2s transform ease-in-out;
  &:hover {
    transform: translateX(6px);
    cursor: pointer;
  }
`;

export const Arrow = styled.span`
  position: absolute;
  background-color: ${props => props.onErrorChangeColour};
  transform: rotate(135deg);
  left: 23px;
  ::after, &::before {
    position: absolute;
    content: '';
    width: 13px;
    height: 2px;
    top: -1px;
    left: 0;
    background-color: ${props => props.onErrorChangeColour};
  }
  ::before {
    transform-origin: left;
    transform: rotate(90deg);
  }
`;