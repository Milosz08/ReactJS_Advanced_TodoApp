/**
 * @file defaultTodos.js
 * @author Miłosz Gilga (gilgamilosz451@gmail.com)
 * @brief JavaScript file storing constants values.
 *
 * @project_name "react-js-todo-app"
 * @version "^0.1.0"
 *
 * @date final version: 08/27/2021
 */

/**
 * Todo task priority values.
 */
export const PRIORITY = {
    NONE: 'none',
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high'
}

const { NONE, LOW, MEDIUM, HIGH } = PRIORITY;

/**
 * Default Todo list (injecting base on prop parameter).
 */
const DEFAULT_TODOS = [
    {
        _id: Math.floor(Math.random() * 1000),
        title: 'Learn ReactJS',
        description: 'Just learn the biggest and most powerfull JavaScript library.',
        initDate: new Date('2021-08-26'),
        priority: MEDIUM,
        statusEnd: false,
    },
    {
        _id: Math.floor(Math.random() * 1000),
        title: 'Learn NodeJS',
        description: 'Just learn the best back-end environment for React Apps.',
        initDate: new Date('2021-08-26'),
        priority: LOW,
        statusEnd: false,
    },
    {
        _id: Math.floor(Math.random() * 1000),
        title: 'Learn VueJS',
        description: 'Just learn the fastest growing JavaScript library.',
        initDate: new Date('2021-08-26'),
        priority: HIGH,
        statusEnd: true,
    },
    {
        _id: Math.floor(Math.random() * 1000),
        title: 'Build custom API in NodeJS',
        description: '',
        initDate: new Date('2021-08-27'),
        priority: NONE,
        statusEnd: false,
    }
];

export default DEFAULT_TODOS;