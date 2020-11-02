const { request } = require('express');
const { estimatedDocumentCount } = require('../models/Service');
const Service = require('../models/Service');
module.exports = {
  async index(req,res){
    const services=await Service.find();
    return res.json(services);
  },
  async serviceStatus(req,res){
    let {status} = req.params;
    const services = await Service.find({status});
    return res.json(services);
  },
  async start(req,res){
    let {client,clientNumber,dateInitial,hourInitial,horimeterInitial} = req.body;
    const service = await Service.create({
      client,
      clientNumber,
      dateInitial,
      hourInitial,
      horimeterInitial,
      status:false
    });
    return res.json({status:true,msg:'Serviço iniciado com sucesso!'})
  },
  async getOne(request,response){
    let{_id}=request.params;
    const service=await Service.findOne({_id});
    return response.json(service);
  },
  async stop(req,res){
    let {_id,client,clientNumber,dateInitial,hourInitial,horimeterInitial,dateFinal,hourFinal,horimeterFinal} = req.body;
    
    const delService = await Service.deleteOne({_id});
    let totalHours=(horimeterFinal-horimeterInitial);
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
      totalHours,
      valueTotal,
      status:true
    });
    return res.json({status:true,msg:'Serviço iniciado com sucesso!'})
  },
}