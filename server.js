const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Contoh route
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.json({ message: "Data berhasil diterima", data: req.body });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
