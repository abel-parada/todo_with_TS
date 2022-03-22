//Types, hooks and other libraries
import React, {FC, ChangeEvent, useState} from 'react'; 

//Styles
import './App.css';

//Components
import TodoTask from './Components/TodoTask';
import Footer from './Components/Footer';

//Interfaces - or types defined,
import { ITask } from './Interfaces';

const App: FC = () => {

  const [task,setTask] = useState<string>('');
  const [deadline,setDeadline] = useState<number>(0);
  const [todo,setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    
    if (event.target.name === "task"){
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }

  };

  const addTask = ():void => {
    const newTask = {
      taskName: task,
      deadline: deadline
    };

    setTodo([...todo, newTask]);
    // console.log(todo);
    setTask('');
    setDeadline(0);

  }

  const completeTask = (taskNameToDelete: string):void => {
    setTodo(todo.filter((task) =>{
      return task.taskName !== taskNameToDelete;
    }));
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='inputcontainer'>
          <label>What does need doing?</label>
          <input 
            type="text" 
            placeholder='Task' 
            name="task" 
            onChange={handleChange} 
            value={task}
            required
          />
          <label>Deadline in days</label>
          <input 
            type="number" 
            placeholder='Deadline in days' 
            name='deadline'
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <button onClick={addTask}>Add TODO</button>
      </div>
      <div className='todo'>
        {todo.map((task: ITask, key:number) => {
          return <TodoTask 
            key={key}
            task={task}
            completeTask={completeTask}
          />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
