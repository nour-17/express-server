const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
// app.use(logger);
app.get("/", (req, res) => {
	console.log("here");
	// res.status(500).json({ message: "hey" });
	res.render("index", { text: "world" });
});
const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(3000);
