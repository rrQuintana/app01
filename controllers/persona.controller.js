const Persona = require("../models/persona.model");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).sent({
      message: "No pude estar vacía la petición.",
    });
  }

  //Crear una persona
  const newPersona = new Persona({
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    email: req.body.email || "test@example.com",
  });

  Persona.create(newPersona, (err, data) => {
    if (err)
      res.status(400).json({
        message: err.message || "Error al crear una nueva persona",
      });
    else res.json(data);
  });
};
