import fetch from "node-fetch";

export default async function handler(req, res) {
  const key = process.env.VITE_NEWS_KEY;
  const { q, language, pageSize } = req.query;
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (!key) {
    return res.status(500).json({ error: "API key not configured." });
  }

  try {
    const apiRes = await fetch(
      `https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=${pageSize}&apiKey=${key}`
    );

    if (!apiRes.ok) {
      const errorData = await apiRes.json();
      return res.status(apiRes.status).json(errorData);
    }

    const data = await apiRes.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch news." });
  }
}
