const Task = require('../models/Task');

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
    const tasks = await Task.find(/* {user: req.user.id} */);
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
   const updateTodoDoc= await  Task.findByIdAndUpdate(
       
       /*  { _id: req.params.id, user: req.user.id }, */
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
    const deletedoc=await Task.findByIdAndDelete(/* {_id: req.params.id, user: req.user.id} */id);
    res.status(204).json({ message: 'Task deleted' });
    
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: error.message}); 
    }
};
