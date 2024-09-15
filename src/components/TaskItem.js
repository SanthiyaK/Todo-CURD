// TaskItem.js
import React, { useState } from 'react';
import axios from 'axios';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [status, setStatus] = useState(task.status);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${task._id}`, { title, description, dueDate, status });
      onUpdate(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating task', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      onDelete(task._id);
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  return (
  
    <div class="bg-warning ">
      {isEditing ? (
        <div class="mt-2 p-3"> 
          <input type="text" value={title} class="form-control  mb-2" onChange={(e) => setTitle(e.target.value)} />
          <textarea value={description} class="form-control  mb-2" onChange={(e) => setDescription(e.target.value)} />
          <input type="date" class="form-control  mb-2" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          <select value={status} class="form-control mb-2" onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button  class="btn btn-primary  mx-1" onClick={handleUpdate}>Save</button>
          <button  class="btn btn-primary " onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        
        <div class="mb-2 p-3">
          
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <button class="btn btn-info mx-1" onClick={() => setIsEditing(true)}>Edit</button>
          <button class="btn btn-danger mx-1" onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
