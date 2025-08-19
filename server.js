const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Contoh endpoint test
app.get("/", (req, res) => {
  res.json({ message: "Backend jalan 🚀" });
});

// Endpoint untuk terima data dari form
app.post("/submit", (req, res) => {
  console.log(req.body); // data dari frontend
  res.json({ status: "success", data: req.body });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di port ${PORT}`));
