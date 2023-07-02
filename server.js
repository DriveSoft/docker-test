// https://www.sharooq.com/how-to-set-up-docker-for-local-development
import express from "express";

const app = express();
const PORT = 80;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.listen(PORT, () => console.log(`server is listening to PORT ${PORT}`));

app.get("/", (req, res) => {
  res.send("Server is running6 "); 
});