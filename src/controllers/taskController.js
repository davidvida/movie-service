const { taskService } = require('../services')

/*
 * call other imported services, or same service but different functions here if you need to
*/
const getTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getTasks();
    // res.json(tasks);
    res.status(201).send(tasks);
    next();
  } catch(e) {
    console.log(e.message);
    res.status(400).send({message: e.message});
  }
}

const postTask = async (req, res, next) => {
  const task = { ...req.body };
  try {
    const newTask = await taskService.createTask(task);
    res.json(newTask);
    res.status(201);
    next();
  } catch(e) {
    console.log(e.message);
    res.status(400).send({message: e.message});
  }
}

const putTask = async (req, res, next) => {
  const { id } = req.params;
  const task = { ...req.body };
  try {
    const newTask = await taskService.updateTask(id, task);
    res.json(newTask);
    res.status(201);
    next();
  } catch(e) {
    console.log(e.message);
    res.status(405).send({message: e.message});
  }
}

module.exports = {
  getTasks,
  postTask,
  putTask
};
