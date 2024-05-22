# CamPhish
### Cam shots from target's phone front camera or PC webcam just sending a link, or add the script to your website or any webpage without port forwarding and web server.
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
  <img src="/Preview/Frame 1.png" width="20%" />
  <img src="/Preview/Frame 2.png" width="20%" />
</p>
So here is our bot token 63xxxxxx71:AAFoxxxxn0hwA-2TVSxxxNf4c (make sure we don't share it to anyone).
#### Get Chat ID for a bot
 1. Add our Telegram bot into a channel

 
 1. Send a message to the channel
 1. Open this URL  ``` https://api.telegram.org/bot{our_bot_token}/getUpdates ``` 
We will see a json like so

```
{
  "ok": true,
  "result": [
    {
      "update_id": 838xxxx36,
      "channel_post": {...},
        "chat": {
          "id": -1001xxxxxx062,
          "title": "....",
          "type": "channel"
        },
        "date": 1703065989,
        "text": "test"
      }
    }
  ]
}
```

Check the value of result.0.channel_post.chat.id, and here is our Chat ID: -1001xxxxxx062
