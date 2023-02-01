///Iniciamos express para su uso
const express = require("express");
const app = express();
const port = "3000";

//Inicia una ruta para raiz (/) con un método get
app.get("/", (req, res)=>{
  console.log(`Peticion a: ${req.url}`)
  res.send("Estás en raiz")
})

///Server starts on port 3000 at localhost 127.0.0.1
app.listen(port, (error) => {
  if (error) console.log(`Something went wrong ${error}`);
  console.log(`Server started on port ${port}`);
});
