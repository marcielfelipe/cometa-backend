const File = require('../models/File');

module.exports = {
  async create(req,res){
    const file = await Service.create({
      url
    });
    return res.json({status:true,file})
  }
}