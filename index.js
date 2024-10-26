import express from "express";
import bodyParser from "body-parser";
import motorRoute from "./routes/motor.js";
import daerahRoute from "./routes/daerah.js";
import univRoute from "./routes/univ.js";

const app = express();
const PORT = 8000;

app.use("/mobil", motorRoute);
app.use("/daerah", daerahRoute);
app.use("/club", univRoute);


app.get("/", (req, res) => {
    console.log(["GET ROUTE"]);
    res.send("Selamat Pagi");
});

app.use(bodyParser.json());
app.listen(PORT, () =>
    console.log(`sServer berjalan di port : http://localhost:${PORT}`));