import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks');
        setTasks(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updateTodoDoc) => {
    setTasks(tasks.map(task => task._id === updateTodoDoc._id ? updateTodoDoc : task));
  };

  const deleteTask = (deletedoc) => {
    setTasks(tasks.filter(task => task._id !== deletedoc));
  };

  return (
    <div>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
};

export default Dashboard;
