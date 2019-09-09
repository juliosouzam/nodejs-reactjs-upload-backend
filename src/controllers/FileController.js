const File = require("./../models/File");

module.exports = {
  async index(req, res) {
    const files = await File.find();

    return res.json(files);
  },
  async store(req, res) {
    const { originalName: name, size, key, location: url = "" } = req.file;

    const file = await File.create({
      name,
      size,
      key,
      url
    });
    return res.send(file);
  },
  async destroy(req, res) {
    const file = await File.findById(req.params.id);
    await file.remove();

    return res.send();
  }
};
