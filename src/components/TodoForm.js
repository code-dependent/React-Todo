import React from 'react';


const TodoForm= props=> {
    
    return(
        <form onSubmit={props.submitHandle}>
            <label>Todo Item
                <input
                    name='formInput'
                    value={props.formInput}
                    type='text'
                    placeholder='Enter a task'
                    onChange={props.changeHandle}/>
            </label>
            <button onSubmit={props.submitHandle}>Submit</button>
        </form>

    )
    
    
}

export default TodoForm;