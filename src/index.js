import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () =>{

    const todoData = [
        {label: 'Build App', important: true, id: 1},
        {label: 'Drink Coffee', important: false, id:2},
        {label: 'Zzz', important: true, id:3}
    ]

    return (
    <div>
        <AppHeader />
        <SearchPanel />
        <TodoList todos = {todoData} />
    </div>
);
};


    ReactDOM.render(<App />,
        document.getElementById('root'));
