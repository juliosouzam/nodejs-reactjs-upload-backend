const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");
const FileController = require("./controllers/FileController");

routes.get("/files", FileController.index);
routes.post(
  "/files",
  multer(multerConfig).single("file"),
  FileController.store
);
routes.delete("/files/:id", FileController.destroy);

module.exports = routes;
