// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm'


const TodoList = (props) => {
    
    return(
        <div>
            {
                props.list.map(task=>(
                    <h3 style={props.isCrossed(task.completed)} key={task.id} onClick={()=>{
                        props.isComplete(task.id)}}>{task.name}</h3>  
                ))
            }
            <TodoForm 
                formInput={props.formInput} 
                changeHandle={props.changeHandle} 
                submitHandle={props.submitHandle} 
                addTask={props.addTask} 
                />

            <button onClick={(e)=>{
                e.preventDefault()
                props.cleared()}}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList;
