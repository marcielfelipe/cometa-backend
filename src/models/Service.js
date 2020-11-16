const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

const ServiceSchema = new mongoose.Schema({
  client: String,
  clientNumber: String,
  dateInitial: String,
  hourInitial: String,
  horimeterInitial: Number,
  dateFinal:{
    type:String,
    default:null
  },
  hourFinal: {
    type:String,
    default:null
  },
  horimeterFinal: {
    type:Number,
    default:0
  },
  totalHours: {
    type:Number,
    default:0
  },
  valueTotal: {
    type:Number,
    default:0
  },
  status: Boolean,
  createdAt:{
    type: Date,
    default: Date.now,
  }
});
ServiceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Service",ServiceSchema);