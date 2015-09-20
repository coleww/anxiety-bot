anxiety-bot
----------------

super simple twitter bot version of [Paul Ford's](http://www.twitter.com/ftrain) [anxiety box](http://anxietybox.com/)

### USE IT

- git clone this repo
- npm install
- add twitter API keys for yr anxiety account to config.js
- add yr anxieties and twitterUserName to index.js
- you can also do the opposite and add encouraging messages instead!
- setup a crontab to basically do like `* * * * * cd anxiety-bot && node bot.j`
- approximately once a day, the bot will tweet an anxiety at you
- you might want to make the bot "private" so that no one else can see what it says. Follow it and make it follow you back. Beware that things that you tweet back to the bot will be visible to people. 
- seeing the disembodied anxiety tweeted at you by a bot helps to reveal how absurd the anxiety is. we can cuss at it, and then go on with our day, this worry having been externalized and stomped on.