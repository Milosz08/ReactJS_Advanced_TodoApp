/**
 * @file TodoAppStyles.js
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

import styled from "styled-components";

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