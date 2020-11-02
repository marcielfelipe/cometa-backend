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
      valueTotal,
      status:false
    });
    return res.json({status:true,msg:'Serviço iniciado com sucesso!'})
  },
  async getOne(request,response){
    let{_id}=request.params;
    const service=await Service.findOne({_id});
    return response.json(service);
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