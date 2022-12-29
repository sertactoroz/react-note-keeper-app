const express = require ('express');
const notesRoutes = require("./src/notes/routes");
const appServer = express();
const port = 3001;

appServer.use(express.json());

appServer.get("/", (req,res)=>{
    res.send("Hello world");
})

appServer.use("/api/v1/notes", notesRoutes)
appServer.listen(port, ()=> console.log(`app listening on port ${port}`));
