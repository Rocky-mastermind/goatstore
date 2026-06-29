const fs = require("fs-extra");
const path = require("path");
const axios = require("axios");

module.exports = {
        config: {
                name: "draft",
                aliases: [],
                version: "1.0",
                author: "Rocky Chowdhury",
                countDown: 5,
                role: 4,
                description: {
                        en: "View the source code of a specific command via download link"
                },
                category: "system",
                guide: {
                        en: "   {pn} <command name>: get download link of command source"
                }
        },

        onStart: async function ({ args, message, api, event }) {
                if (!args.length) {
                        return message.SyntaxError();
                }

                const commandName = args[0].toLowerCase();
                const allCommands = global.GoatBot.commands;

                let command = allCommands.get(commandName);
                if (!command) {
                        const cmd = [...allCommands.values()].find((c) =>
                                (c.config.aliases || []).includes(commandName)
                        );
                        command = cmd;
                }

                if (!command) {
                        return message.reply("❌ Command not found");
                }

                const actualCommandName = command.config.name;

                if (!/^[a-zA-Z0-9_-]+$/.test(actualCommandName)) {
                        return message.reply("❌ Invalid command name");
                }

                const allowedDir = path.resolve(__dirname);
                const filePath = path.resolve(__dirname, `${actualCommandName}.js`);

                if (!filePath.startsWith(allowedDir)) {
                        return message.reply("❌ Access denied");
                }

                try {
                        if (!fs.existsSync(filePath)) {
                                return message.reply("❌ File not found");
                        }

                        const content = fs.readFileSync(filePath, "utf-8");

                        const response = await axios.post(
                                "https://goatstore.vercel.app/upload",
                                {
                                        content: content,
                                        filename: "draft.js"
                                },
                                {
                                        headers: { "Content-Type": "application/json" },
                                        timeout: 10000
                                }
                        );

                        const { url } = response.data;

                        return message.reply(
                                `╔════════════════════╗\n` +
                                `║   📂  DRAFT FILE   ║\n` +
                                `╚════════════════════╝\n\n` +
                                `👤 Author: Rocky Chowdhury\n` +
                                `📁 Source: ${actualCommandName}.js\n` +
                                `📝 Draft: draft.js\n\n` +
                                `🔗 Download:\n${url}\n\n` +
                                `⏳ Expires in 24 hours`
                        );

                } catch (err) {
                        return message.reply(`❌ Error: ${err.message}`);
                }
        }
};
