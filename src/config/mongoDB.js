const mongoose = require('mongoose');
const URL = process.env.MONGODB_URL;
mongoose.connect(URL);

module.exports = mongoose;
