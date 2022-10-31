# GE Translate based on [grammY](https://grammy.dev)

Translation of Georgian text and transliteration (from SMS) into Russian and English.

# Installation and local launch

1. Clone this repo: `git clone https://github.com/sergshumakov/ge-translate`
2. Launch the [mongo database](https://www.mongodb.com/) locally
3. Create `.env` with the environment variables listed below
4. Run `yarn` in the root folder
5. Run `yarn develop`

And you should be good to go! Feel free to fork and submit pull requests. Thanks!

# Environment variables

- `TOKEN` — Telegram bot token
- `MONGO` — URL of the mongo database
- `YANDEX_TRANSLATE_KEY` - Yandex API key
- `YANDEX_FOLDER_ID` - Yandex folder id from cloud

Also, please, consider looking at `.env.sample`.

# License

MIT — use for any purpose. Would be great if you could leave a note about the original developers. Thanks!
