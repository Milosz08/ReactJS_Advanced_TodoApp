/**
 * @file Header.jsx
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief TypeScript React Stateless functional component (simplify state with React Hooks).
 *
 * @projectName "react-js-todo-app"
 * @version "^0.1.0"
 *
 * @dependencies  ReactJS: "^17.0.2"
 *                ReactFontAwesome: "^0.1.15"
 *
 * @date final version: 08/27/2021
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { HeaderContainer, HeaderLink, HeaderTitle } from './HeaderStyles';

/**
 * @details Component responsible for generating the header of the main Todo list container.
 *
 * @returns {JSX.Element}
 */
const Header = () => (
    <HeaderContainer>
        <HeaderTitle>todo app</HeaderTitle>
        <HeaderLink>
            <a
                href = 'https://github.com/Milosz08'
                target = '_blank'
                rel = 'noreferrer'
                title = 'Go to my Github profile'
            >
                <FontAwesomeIcon icon = {faGithub}/>
            </a>
        </HeaderLink>
    </HeaderContainer>
);

export default Header;