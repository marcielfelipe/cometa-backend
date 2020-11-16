const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

const FileSchema = new mongoose.Schema({
  url:String,
  createdAt:{
    type: Date,
    default: Date.now,
  }
});
FileSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("File",FileSchema);