const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

const ServiceSchema = new mongoose.Schema({
  client: String,
  clientNumber: String,
  dateInitial: String,
  hourInitial: String,
  horimeterInitial: Number,
  dateFinal: String,
  hourFinal: String,
  horimeterFinal: Number,
  totalHours: Number,
  valueTotal: Number,
  status: Boolean,
  createdAt:{
    type: Date,
    default: Date.now,
  }
});
ServiceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Service",ServiceSchema);