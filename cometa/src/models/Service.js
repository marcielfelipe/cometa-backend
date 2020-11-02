const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

const ServiceSchema = new mongoose.Schema({
  client: String,
  clientNumber: String,
  dateInitial: String,
  hourInitial: Number,
  horimeterInitial: Number,
  dateFinal: String,
  hourFinal: Number,
  horimeterFinal: Number,
  totalHours: Number,
  valueTotal: Number,
  createdAt:{
    type: Date,
    default: Date.now,
  }
});
ServiceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Service",ServiceSchema);