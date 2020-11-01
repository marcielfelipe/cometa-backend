const { request } = require('express');
const { estimatedDocumentCount } = require('../models/Service');
const Service = require('../models/Service');
module.exports = {
  async index(req,res){
    const {page=1}=req.query;
    const services=await Service.paginate({},{page,limit:5});
    return res.json({status:true,services});
  },
  async create(req,res){
    let {client,clientNumber,dateInitial,hourInitial,horimeterInitial,dateFinal,hourFinal,horimeterFinal} = req.body;
    let valueTotal=(horimeterFinal-horimeterInitial)*130;
    const service = await Service.create({
      client,
      clientNumber,
      dateInitial,
      hourInitial,
      horimeterInitial,
      dateFinal,
      hourFinal,
      horimeterFinal,
      totalHours:(horimeterFinal-horimeterInitial),
      valueTotal
    });
    return res.json({status:true,service})
  },
  async getOne(request,response){
    let{_id}=request.params;
    const service=await Service.findOne({_id:_id});
    return response.json({status:true,service});
  },
  async edit(req,res){
    const {_id,client,clientNumber,dateInitial,hourInitial,horimeterInitial,dateFinal,hourFinal,horimeterFinal} = req.body;
    try {
      const service = await Service.updateOne({_id},{$push:{client,clientNumber,dateInitial,hourInitial,horimeterInitial,dateFinal,hourFinal,horimeterFinal}});
      return res.json({status:true,msg:'Dados alterados com sucesso!'});
    } catch (error) {
      return res.json({status:false,msg:'Falha de comunicação com o servidor!'});
    }
  }
}