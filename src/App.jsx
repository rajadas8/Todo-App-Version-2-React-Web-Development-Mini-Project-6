// Raja Ram Hemsworth => App React(XML) Code
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
function App(){
    const todoItems = [
        {name: "Buy Milk", date: "03/10/2025"},
        {name: "Go To College", date: "10/20/2025"},
        {name: "Raja Ram Hemsworth", date: "30/12/2025"}
    ];
    return <center className='todo-container'>
        <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems}></TodoItems>
    </center>
}
export default App;