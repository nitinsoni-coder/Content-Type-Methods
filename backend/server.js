import express from "express";
import cors from "cors";
const app = express();
const port = 8080;

// we use urlencoded method when we are sending data urlencoded from the frontend.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// we have use cors to connect our frontend
app.use(cors());

app.post("/urlEncodedForm", async (req, res) => {
  console.log("--req---", req.body);

  res.status(200).send("form submitted");
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
