/**
 * @file DetailsModalStyles.js
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

export const ModalContainer = styled.div`
  display: ${props => props.visible};
  opacity: ${props => props.opacity};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .3);
  transition: .2s opacity ease-in-out;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .4);
  padding: 20px;
  border-radius: 7px;
  opacity: ${props => props.opacity};
  transform: ${props => props.translate};
  transition: .2s ease-in-out;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 1.1rem;
  color: var(--mainTextColour);
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 80%;
    height: 1px;
    background-color: var(--mainTextColour);
    ::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      left: 0;
      background-color: var(--mainTextColour);
      transform: rotate(90deg);
    }
  }
`;

export const Separator = styled.aside`
  width: 100%;
  height: 1px;
  background-color: var(--darkGrayColour);
  margin: 20px 0;
`;

export const ChangeSection = styled.div`
  
`;

export const InputsContainer = styled.div`
  position: relative;
`;

export const Textarea = styled.textarea`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  resize: vertical;
  border: none;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom: 1px solid ${props => props.error ? 'var(--highPriority)' : 'var(--magentaColour)'};
  font-size: 1.1rem;
  color: ${props => props.error ? 'var(--highPriority)' : 'var(--magentaColour)'};
  transition: .2s background-color ease-in-out;
  :focus {
    outline: none;
    background-color: var(--lightLightGrayColour);
  }
  ::placeholder {
    color: var(--placeholderColour);
  }
`;

export const PseudoText = styled.span`
  position: absolute;
  right: 20px;
  bottom: 10px;
  text-transform: uppercase;
  font-size: .8rem;
  color: var(--darkGrayColour);
`;

export const ProrityButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${props => props.activeBackground};
  color: ${props => props.activeForeground};
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  margin: 20px 0;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: .2s ease-in-out;
`;

export const ProrityWrapper = styled.div`
  display: ${props => props.display};
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  background-color: #fff;
  
`;

export const SubmitButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${props => props.typeCSS === 'close' ? 'var(--lightGrayColour)' : 'var(--magentaColour)'};
  color: ${props => props.typeCSS === 'close' ? 'var(--normalGrayColour)' : '#fff'};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  margin-right: ${props => props.typeCSS === 'close' ? '20px' : '0'};
  text-transform: capitalize;
  padding: 10px;
  transition: .2s ease-in-out;
  :hover {
    background-color: ${props => props.typeCSS === 'close' ? 'var(--darkenGrayColour)' : 'var(--darkenMagentaColour)'};
  }
`;