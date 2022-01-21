import express from "express";
import cors from "cors";

const serve = express();
serve.use(cors());
serve.use(express.json());

let usuario = {};
let tweets = [];

serve.post("/sign-up", (req, res) => {
	console.log(req.body);
	usuario = { ...req.body };
	res.send("OK");
});

serve.get("/tweets", (req, res) => {
	res.send(tweets);
});

serve.post("/tweets", (req, res) => {
	tweets.push(req.body);
	res.send("OK");
});

serve.get("/", (req, res) => {
	res.send(usuario);
});

serve.listen(5000, () => {
	console.log("escutando");
});
