# 🤖 Telegram Joke Bot

A fun Telegram bot that sends random jokes to users! Built using Node.js and the `node-telegram-bot-api` package.

---

## 📌 Features
- Sends random jokes on command.
- Users can start the bot with `/start`.
- Get a joke anytime using `/joke`.
- Simple and lightweight.

---

## 🛠 How to Set Up the Bot
Follow these steps to create and set up your own Telegram Joke Bot.

### **Step 1: Create a Bot Using BotFather**
1. Open Telegram and search for **[BotFather](https://t.me/BotFather)**.
2. Start a chat with **BotFather** by clicking **"Start"**.
3. Type the command:
   ```
   /newbot
   ```
4. BotFather will ask for a **bot name**. Provide a unique name (e.g., `JokeBot`).
5. It will then ask for a **username** (must end in `bot`, e.g., `JokeMasterBot`).
6. Once done, BotFather will generate a **bot token**. Copy this token and keep it safe.

---

### **Step 2: Set Up the Project**
1. **Clone the repository**:
   ```sh
   git clone https://github.com/hemant-kushwaha/telegram_joke_BOT.git
   cd telegram_joke_BOT
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Create a `.env` file** in the root directory and add:
   ```env
   BOT_TOKEN=your-telegram-bot-token
   ```

   Replace `your-telegram-bot-token` with the token you got from **BotFather**.

---

### **Step 3: Run the Bot**
Start the bot using:

```sh
node index.js
```

Now go to Telegram, search for your bot, and type `/start` to test it.

---

## 📜 Usage
| Command  | Description |
|----------|-------------|
| `/start` | Start the bot and receive a welcome message. |
| `/joke`  | Get a random joke from the bot. |

---

## 🌍 Deploying the Bot Online
To keep the bot running **24/7**, you need to deploy it to a server.

### **Option 1: Deploy on Railway.app**
1. Go to [Railway.app](https://railway.app/) and sign up.
2. Create a **new project** and **connect your GitHub repository**.
3. Add your `BOT_TOKEN` as an **environment variable**.
4. Click **Deploy** to start the bot.

### **Option 2: Deploy on Render**
1. Sign up at [Render.com](https://render.com).
2. Create a **new web service** and link your GitHub repo.
3. Set the **start command** as:
   ```sh
   node index.js
   ```
4. Add your `BOT_TOKEN` as an **environment variable**.
5. Deploy your bot.

---

## 🛠 Built With
- **Node.js**
- **node-telegram-bot-api**
- **Telegram Bot API**

---

## 📌 To-Do
- [ ] Add categories for jokes.
- [ ] Integrate with a joke API for fresh jokes.
- [ ] Deploy to a cloud server for 24/7 availability.

---

## 💡 Contributing
Want to improve this bot? Feel free to fork the repository and submit pull requests!

---

🎭 **Enjoy using Telegram Joke Bot!** 🤖🚀

