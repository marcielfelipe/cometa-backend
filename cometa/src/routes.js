const {Router} = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const ServiceController = require('./Controllers/ServiceController');
const FileController = require('./Controllers/FileController');


const routes=Router();


routes.post("/service",ServiceController.create);
routes.get("/",ServiceController.index);
routes.put("/",ServiceController.edit);
routes.get("/service",ServiceController.getStatus);


routes.post("/file",multer(multerConfig).single('file'),FileController.create);

module.exports = routes;