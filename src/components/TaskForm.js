import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', { title, description, dueDate, status });
      onAdd(response.data);
      setTitle('');
      setDescription('');
      setDueDate('');
      setStatus('To Do');
    } catch (error) {
      console.error('Error adding task', error);
    }
  };

  return (
    <div class="mt-5">
      <h1 class="text-muted">MERN STACK TASK MANAGEMENT APPLICATION</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title}  class="form-control mb-2" onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description}  class="form-control mb-2"  onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="date" value={dueDate} class="form-control mb-2"  onChange={(e) => setDueDate(e.target.value)} required />
      <select value={status} class="form-control mb-2"   onChange={(e) => setStatus(e.target.value)} required>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit" class="btn btn-success mb-4">Add Task</button>
    </form>
    </div>
  );
};

export default TaskForm;
