'use strict';

const mongoose = require('mongoose')
const MONGODB_URL = 'mongodb://localhost:27017/freddit'

mongoose.Promise = Promise //tells mongoose to use global Promise vs. its' internal promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)
