'use strict';

const mongoose = require('mongoose')
// const MONGODB_URL = 'mongodb://localhost:27017/freddit'
// const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/freddit'
const MONGODB_URL = 'mongodb://fredditMaster:12345678@ds033106.mlab.com:33106/freddit'


mongoose.Promise = Promise //tells mongoose to use global Promise vs. its' internal promise

module.exports.connect = () => mongoose.connect(MONGODB_URL)
module.exports.disconnect = () => mongoose.disconnect()
