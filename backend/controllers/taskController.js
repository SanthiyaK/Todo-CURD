const Task = require('../models/Task');
const User = require('../models/User');
// Create Task
exports.createTask = async (req, res) => {
  const { title, description,dueDate,status} = req.body
  try {
    const newTask = new Task({ title, description,dueDate,status});
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  } 
};

// Get Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  
  try{
    const {title,description,dueDate,status}=req.body;
    const id=req.params.id; 
   /* let task = await Task.findById(req.params.id);
   if (!task) return res.status(404).json({ msg: 'Task not found' });
   if (task.user.toString() !== req.user.userId) return res.status(401).json({ msg: 'Not authorized' }); */

   const updateTodoDoc= await  Task.findByIdAndUpdate(
        id,
        {title,description,dueDate,status},
        {new:true}
    )
    if(!updateTodoDoc){
        return res.status(404).json({message:"Todo not found"})
    }
      res.json(updateTodoDoc)
  
}catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try{
    const id=req.params.id;
    const deletedoc=await Task.findByIdAndDelete(id);
    res.status(204).end();
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: error.message}); 
    }
};
