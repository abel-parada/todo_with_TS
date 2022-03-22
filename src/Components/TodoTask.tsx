import React from 'react';
import {ITask} from '../Interfaces';

interface Props {
    task:ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}:Props) => {
    return (
        <div className='task'>
            <div className='content'>
                <span><strong></strong> {task.taskName}</span>
                <span><strong></strong> {task.deadline} days</span>
            </div>
            <button onClick={() => {completeTask(task.taskName)}}>X (delete)</button>
        </div>
    );
};

export default TodoTask;