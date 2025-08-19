export default async function handler(req, res) {
  // Izinkan CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Tangani preflight (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    const { name, phone } = req.body;

    // contoh respon dulu
    return res.status(200).json({ success: true, name, phone });
  }

  return res.status(405).json({ success: false, error: "Method Not Allowed" });
}
