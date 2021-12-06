const mongoose = require('../config/mongoDB');
const { Schema, Types } = require('mongoose');

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false
  },
  description: String,
  labels: [String],
  startDate: Date,
  endDate: Date,
  user: {
    type: String,
    required: true
  }
},{
  versionKey: false
});

const TaskModel = mongoose.model('Task', taskSchema);

const find = async () => {
  try {
    const findResult = await TaskModel.find({});
    return findResult;
  } catch(error) {
    console.log(error);
  }
}

const save = async (task) => {
  try {
    const newTask = new TaskModel(task);
    await newTask.save();
    return newTask;
  } catch(error) {
    throw new Error(error);
  }
};

const findByIdAndUpdate = async (id, task) => {
  try {
    delete(task._id);
    const taskUpdated = await TaskModel.findOneAndUpdate({_id: new Types.ObjectId(id)}, task, {new: true});
    return taskUpdated;
  } catch(error) {
    throw new Error(error);
  }
};

module.exports = {
  find,
  save,
  findByIdAndUpdate
};
