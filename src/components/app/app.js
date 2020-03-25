import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";
import React from "react";

const App = () =>{

    const todoData = [
        {label: 'Build App', important: true, id: 1},
        {label: 'Drink Coffee', important: false, id:2},
        {label: 'Zzz', important: true, id:3}
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos = {todoData} />
        </div>
    );
};

export default App;
