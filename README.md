<h1 align="center">
  Todo App in ReactJS
  <br>
  <img src="https://raw.githubusercontent.com/Milosz08/ReactJS_Advanced_TodoApp/master/img/main-logo.png" width="200">
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">
An advanced Todo application written using the ReactJS library and several smaller libraries including Styled Components and React Font Awesome. This application, when installed through the Node Package Manager, is designed to connect to an API (for example, NodeJS RestAPI).
</p>

> See this app at [todoapp.miloszgilga.pl](https://todoapp.miloszgilga.pl/) <br>
> Install this app in your project from [Node Package Manager](https://www.npmjs.com/package/advanced-todo-app-reactjs) <br>

## Installation

Install this app from Node Package Manager command:
```
$ npm i advanced-todo-app-reactjs
```
> NOTE: This application needs to install some additional libraries to function properly. List of all necessary dependencies can be found in `package.json` file. Dependencies will be installed automatically with the project.

## Screenshots

<img src="https://raw.githubusercontent.com/Milosz08/ReactJS_Advanced_TodoApp/master/img/screenshot.png" width="1280">

## Documentation

All `<TodoApp />` component props:

|Prop name|Description|&nbsp;&nbsp;&nbsp;Typeof&nbsp;&nbsp;&nbsp; prop value|Required|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; values|
|----|----|----|----|----|
|ifActiveDB|Props to indicate that the database connection is active. If the default value is `false`, it displays the default tasks from the project. If `true`, the default tasks are not displayed.|`boolean`| yes | `true` or `false` |
|getDBcallback()|A callback function that returns an array with the all tasks (from file or endpoint).|`() => []`|no|see in usage section|
|updateDBcallback()|A callback function taking in parameter the current list of tasks (possible to send via endpoints).|`() => void`|no|see in usage section|

All `updateDBcallback()` function parameters:
* todoList (required):
  * for actions: `EDIT ALL`, `REMOVE_ALL` - array with all dotoList objects,
  * for actions: `ADD`, `REMOVE` - null (idle),
  * for action: `EDIT` - single updated object,
* action (required): action type as string value (see example),
* id (required):
  * for actions: `ADD`, `REMOVE_ALL`, `EDIT_ALL` -  null (idle),
  * for actions: `EDIT`, `REMOVE` - id of the selected item from the list (as a string).

## Single TodoTask Schema Structure
```
   {
      _id: string (required) - generated by database,
      title: string (required),
      description: string(required),
      initDate: Date type (required),
      priority: string (required),
      statusEnd: boolean (required)
   } 
```

## Example usage with AXIOS library

> NOTE: In the following example, I use the mongoDB database and NodeJS. The endpoint with the list of all data in JSON format can be found at: 'api/list-items'.

1. If you want to use the same font I used in the project, you need to import it into the main `index.html` file. Otherwise it will be replaced by a sans-serif font (usually Arial).
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">
```

2. Then, install [AXIOS](https://www.npmjs.com/package/axios) library:
```
$ npm i axios
```

3. After installed, created file with AXIOS instance:
```js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://localhost:3000/api',
});

export default axiosInstance;
```

4. Implements app component in your React App component:
```js
import React from 'react';
import axiosInstance from '[axios instance file relative path]';

import TodoApp from 'advanced-todo-app-reactjs';

const App = () => {
  
    const handleGetDB = async () => {
        const res = await axiosInstance.get('/list-items');
        return res.data;
    };
  
    const handleUpdateDB = async (todoList, type, id) => {
        switch(type) {
            case 'ADD':
                await axiosInstance.post('/list-items', todoList);
                break;
            case 'REMOVE':
                await axiosInstance.delete(`/list-items/${id}`);
                break;
            case 'REMOVE_ALL':
                await Promise.all(todoList.map(async (todo) => {
                    await axiosInstance.delete(`/list-items/${todo._id}`);
                }));
            case 'EDIT':
                await axiosInstance.put(`/list-items/${id}`, todoList);
                break;
            case 'EDIT_ALL':
                await Promise.all(todoList.map(async (todo) => {
                    await axiosInstance.delete(`/list-items/${todo._id}`, todo);
                }));
           default:
                throw new Error(`Unexpected dispatch action. Action type: ${type} unserviceable`);
        }
    };
  
    return (
        <TodoApp
            ifActive = {true}
            getDBcallback = {handleGetDB}
            updateDBcallback = {handleUpdateDB}
        />
    );
};
```

## Clone and Installation
If you want to clone and work with this repository, use the built-in interface in your IDE (for example WebStorm or Visual Studio Code) or use the clone project algorithm with git bash:<br>
1. Open Git Bash.
2. Change the current working directory to the location where you want the cloned directory.
3. Type `git clone` and then paste the URL you copied earlier.
  
```
$ git clone https://github.com/Milosz08/ReactJS_Advanced_TodoApp
```

## License
This application is on MIT License [terms of use](https://en.wikipedia.org/wiki/MIT_License).
