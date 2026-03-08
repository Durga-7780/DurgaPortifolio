import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "dist");

const app = express();
const port = Number(process.env.PORT || 10000);

app.use(express.json());
app.use(express.static(distDir));

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return res.status(500).json({ error: "Email environment variables are not configured" });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `New portfolio message from ${name}`,
        html: `
          <h2>New portfolio contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      return res.status(502).json({ error: `Email delivery failed: ${errorBody}` });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    const messageText = error instanceof Error ? error.message : "Unexpected server error";
    return res.status(500).json({ error: messageText });
  }
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(port, () => {
  console.log(`Render server listening on port ${port}`);
});
