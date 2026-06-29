const { nanoid } = require("nanoid");
const { kv } = require("@vercel/kv");

module.exports = async (req, res) => {
        if (req.method !== "POST") {
                return res.status(405).json({ error: "Method not allowed" });
        }

        try {
                let body = "";
                await new Promise((resolve) => {
                        req.on("data", (chunk) => (body += chunk));
                        req.on("end", resolve);
                });

                const { content, filename } = JSON.parse(body);

                if (!content) {
                        return res.status(400).json({ error: "Content required" });
                }

                const id = nanoid(8);

                await kv.set(
                        `file:${id}`,
                        {
                                content,
                                filename: "draft.js" // সবসময় draft.js
                        },
                        { ex: 86400 }
                );

                return res.status(200).json({
                        id,
                        url: `https://${req.headers.host}/raw/${id}`,
                        filename: "draft.js"
                });

        } catch (err) {
                return res.status(500).json({ error: err.message });
        }
};
