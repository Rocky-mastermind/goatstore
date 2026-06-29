const { kv } = require("@vercel/kv");

module.exports = async (req, res) => {
        const id = req.url.replace("/raw/", "").split("?")[0];

        if (!id) {
                return res.status(400).send("ID required");
        }

        try {
                const data = await kv.get(`file:${id}`);

                if (!data) {
                        return res.status(404).send("❌ File not found or expired");
                }

                res.setHeader("Content-Type", "text/plain; charset=utf-8");
                res.setHeader(
                        "Content-Disposition",
                        `attachment; filename="draft.js"`
                );
                return res.status(200).send(data.content);

        } catch (err) {
                return res.status(500).send("Server error: " + err.message);
        }
};
