import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import TodoApp from './components/pages/TodoApp';

ReactDOM.render(
    <TodoApp
        ifActiveDB = {false}
    />,
    document.getElementById('root')
);