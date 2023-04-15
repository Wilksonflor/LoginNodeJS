const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/login")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log("Falha ao conectar");
  });

  const LogInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("Collection1", LogInSchema);

module.exports = LogInSchema;
