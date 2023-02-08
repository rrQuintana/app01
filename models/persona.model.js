const pg = require("./db.js");

//constructor
const Persona = function (persona) {
  (this.nombre = persona.nombre),
    (this.telefono = persona.telefono),
    (this.email = persona.email);
};

Persona.create = (persona, result) => {
  pg.query("INSERT INTO persona SET ?", persona, (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
      return;
    }
    console.log("Row created persona: ", { id: result.insertId, ...persona });
    result(null, { id: result.insertId, ...persona });
  });
};
