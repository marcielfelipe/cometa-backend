const {Router} = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const ServiceController = require('./Controllers/ServiceController');
const FileController = require('./Controllers/FileController');


const routes=Router();


routes.post("/service",ServiceController.start);
routes.put("/stop",ServiceController.stop);
routes.get("/",ServiceController.index);
routes.get("/:_id",ServiceController.getOne);

routes.get("/service/:status",ServiceController.serviceStatus);


routes.post("/file",multer(multerConfig).single('file'),FileController.create);

module.exports = routes;