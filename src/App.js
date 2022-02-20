import './App.css';
import React from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList'

const App = () => {
  return(
    <div className="Todo-list-container">
      
      <div className =" app-wrapper">
        <div> 
      <Header></Header>
      <TodoList></TodoList>
        </div>
      </div>
    </div>
  );
}
export default App;

