import express from "express";

const serve = express();

const usuario = {
	username: null,
	avatar: null,
};

//serve.post("/sign-up", (req, res) => {});

serve.listen(5000, () => {
	console.log("escutando");
});
