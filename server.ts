import db from "./src/config/db";
import express from "express";
import router from "./src/router";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/user", router);
app.get("/", (req, res) => {
   res.send("TUGAS 3");
});

app.listen(PORT, async () => {
   await db.sync();
   console.log("API running at port " + PORT);
});
