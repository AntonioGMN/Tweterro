import express from "express";
import cors from "cors";

const serve = express();
serve.use(cors());
serve.use(express.json());

let usuario = {};
let tweets = [];

serve.post("/sign-up", (req, res) => {
	usuario = { ...req.body };
	console.log(usuario);
	res.send("OK");
});

serve.get("/tweets", (req, res) => {
	res.send(tweets);
	console.log(tweets);
});

serve.post("/tweets", (req, res) => {
	const dado = { ...req.body, avatar: usuario.avatar };
	tweets.push(dado);
	res.send("OK");
});

serve.listen(5000, () => {
	console.log("escutando");
});
