// api/submit.js
export default async function handler(req, res) {
  // --- CORS ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
    return;
  }

  // Parsing body
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) {}
  }

  const { nama, hp } = body || {};
  if (!nama || !hp) {
    res.status(400).json({ success: false, error: "Field 'nama' & 'hp' wajib" });
    return;
  }

  // Sementara: log ke server (cek di Vercel Logs)
  console.log("Data diterima:", { nama, hp });

  // TODO berikutnya: tulis ke Google Sheet
  res.status(200).json({ success: true, message: "Data diterima di backend" });
}
