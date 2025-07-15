import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 5000;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello Priyanshu Chaniyara");
});
app.get("/home", (req, res) => {
  res.sendFile(join(__dirname, "home.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(join(__dirname, "about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(join(__dirname, "contact.html"));
});

console.log(`Server listed on http://localhost:${port}`);

app.listen(port);
