import React, {useState} from 'react'

function ToDoList(){
const [tasks, setTasks] = useState(["eat breakfast", "take a shower", "go for a walk"]);
const [newTask, setNewTask ] = useState("");
function handleInputChange(event){
    setNewTask(event.target.value);

}
function addTask(){

}
function deleteTask(index){

}
function moveTaskUp(index){

}
function moveTaskDown(index){

}
return(
    <div className='to-do-list'>
        <h1> To-Do-List</h1>
        <div>
            <input type='text'
            placeholder='enter a task...'
            value = {newTask}
            onChange={handleInputChange}></input>
        </div>
        <ol>
            {tasks.map((task, index) =>
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-button'><Delete></Delete>vvvvvvvvvvvvv</button>

            </li>
            )}
        </ol>

    </div>);

}
export default ToDoList