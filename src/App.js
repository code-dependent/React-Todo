import React from 'react';
import TodoList from './components/TodoList'
import {v4 as uuid} from 'uuid'

const todoList= []

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList,
      test:'',
      formInput:''
    }
  }

  // handle form changes
  changeHandle = (event)=>{
      this.setState({
      [event.target.name]: event.target.value
      });
  };
  // handle submit
  submitHandle = (event)=>{
    event.preventDefault();
    if(this.state.formInput != ''){
      this.addTask(event, this.state.formInput);
      this.setState({
      formInput: ''
      });
    }
  };
  componentWillMount(){
    localStorage.getItem('todoList') && this.setState({
      todoList: JSON.parse(localStorage.getItem('todoList')),
      isLoading: false
    })
  }

  componentDidMount(){
    if(!localStorage.getItem('todoList')){
      debugger
    }else{
      console.log('using data...')
    }
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('todoList', JSON.stringify(nextState.todoList));
  }
    
// add task item
  addTask = (event, taskName)=>{
    event.preventDefault()
    const newTask = {
      name: taskName,
      id:uuid(),
      completed:false
    }
    this.setState({
      todoList:[...this.state.todoList, newTask]
    })
  }
  //change 'completed' to true
  isComplete = (taskId)=>{
    console.log(taskId)

    this.setState({
      todoList: this.state.todoList.map(task=>{
        if(taskId === task.id){
         return{
           ...task,
           completed: !task.completed
         }
        }
        return task
      })
    })
  }
  // crossout completed tasks
  isCrossed = (props)=>{
    if(props){
      return {textDecoration: 'line-through'}
    }else{
      return {textDecoration: 'none'}

    }
  }
// clear crossed tasks
  cleared = ()=>{
    this.setState({
      todoList: this.state.todoList.filter(task=>{return !task.completed})
    })
  }

  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todoList}
        addTask={this.addTask}
        isComplete={this.isComplete}
        cleared={this.cleared}
        isCrossed={this.isCrossed}
        submitHandle={this.submitHandle}
        changeHandle={this.changeHandle}
        formInput={this.state.formInput}
        />
      </div>
    );
  };
};

export default App;
