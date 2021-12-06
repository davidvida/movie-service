const { taskModel } = require('../models');

const getTasks = async () => {
  try {
    return await taskModel.find();
  } catch(e) {
    throw new Error(e.message);
  }
}

const createTask = async (task) => {
  try {
    return await taskModel.save(task);
  } catch(e) {
    throw new Error(e.message);
  }
};

const updateTask = async (id, task) => {
  try {
    return await taskModel.findByIdAndUpdate(id, task);
  } catch(e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getTasks, 
  createTask,
  updateTask
};
