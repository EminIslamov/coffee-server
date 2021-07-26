const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(require("./routes/drinks.route"));

mongoose
  .connect("mongodb+srv://into:code@cluster0.peqll.mongodb.net/drinks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("успех"))
  .catch((e) => console.log(e));

app.listen(4020, () => {
  console.log('Server has been started')
})