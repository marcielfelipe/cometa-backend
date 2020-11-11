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
  async getOne(req,res){
    let{_id}=req.params;
    const service=await Service.findOne({_id});
    return res.json(service);
  },
  async stop(req,res){
    let {_id,dateFinal,hourFinal,horimeterFinal} = req.body;
    try {
      const service=await Service.update({_id},{$push:{
        dateFinal,
        hourFinal,
        horimeterFinal
      }})
    } catch (error) {
      return res.json({status:false,msg:'Erro de comunicação com o servidor!'})
    }
    
    return res.json({status:true,msg:'Serviço concluído!'})
  },
}