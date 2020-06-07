# discord-js-chatbot-template

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](/LICENSE)
[![Github All Releases](https://img.shields.io/github/downloads/atom/atom/total.svg?style=flat)](https://github.com/EldknMD/discord-js-chatbot-template/archive/master.zip)  

<hr>

*Avaliable in spanish / Disponible en español [aquí.](/READMESPA.md)*

<hr>

A template for simple chatbots on Discord.

Using this template, you should be able to mount your own brandnew discord bot.

### **This guide will use simple language and is intended for less experienced users.**

All important, but not mandatory, topics will be explained in the [wiki](https://github.com/EldknMD/discord-js-chatbot-template/wiki) in the future.

*Personal note: I urge you to read it and understand what you do to improve your own code in the future.*

Follow this short instructive for a quick install.

# Quick start guide

To start, you'll need:

- [ ] A [Discord developer account](https://discord.com/developers/applications): You can use your "normal" discord account to login. If you don't have your own account, you can make [a new account for free](https://discord.com/).

- [ ] A PC with stable internet access. *Note: This proccess is based on Windows. I can't tell if it'll be the same on other operative systems.*
- [ ] Basic english language understanding (If you're reading this, it should be enough).
- [ ] A text editor installed on your device. Windows Notepad is enough, but it'll be easier if you use a program that shows you the line and character number as you edit the code. [Atom](https://atom.io/) is light and a very good choice to starters. I use [Visual Studio Code](https://code.visualstudio.com/). Both are free. There are tons of text editor programs on the internet besides this two, but it's not so relevant when you're starting to code.
- [ ] Some file compressor program (such as Winrar or Winzip).
- [ ] [Node.js library](https://nodejs.org/en/download/current/) installed on your PC. You can see that version you need (32 or 64-bit) searching `system information panel` on your system. Panel picture in spanish bellow. Once you download and open the right versión, it'll start the install wizard, as any other program.

![system information panel](https://i.ibb.co/QQqr1TM/system-info-panel.png)

# 1st Step: Register the bot on your Discord developer profile

Preliminar stage. You need to access Discord dev portal and login.

This is the main view of the portal after you login:

![devportalmainview](https://i.ibb.co/2ScsQND/discorddev.png)

Your next step is click the blue button next to your profile pic: `New Application`.

This promt will open, asking you for a name for your app. This isn't the bot's actual name, just the dev list name for you. **Always use recognizable and short names to optimize your work.**

![newapp](https://i.ibb.co/KWzsGHb/new-app.png)

Here you can put a picture for your app (not the final bot profile pic yet) and a description. Picture and desription aren't mandatory.
The question marks cover the site of my client id. This is a long number, you'll need it later to add your bot to your server.
In order to make the actual "bot" user, click on `Bot` tab on the left side.

![clientID](https://i.ibb.co/NV5y7KS/client-main-view.png)

Here you'll see the blue button `Add bot`. I certainly recomend you read some of the documentation in `Learn more about bot users` link. 

![bottab](https://i.ibb.co/dGFDN6r/bot-page.png)

As you click, a confirm prompt will pop out. **Bots can't be destroyed** in Discord API. Confirm and continue. 

Your bot user is ready. Here you can upload a profile pic for yor bot, change it name and see it token. This token is the "key" your code will use to enter into the bot user you just made. **It's extremely important to keep this number secret. Anyone with this number can access your bot identity and put their own code on it.** You'll be responsable for anything your bot user does.

![newbot](https://i.ibb.co/sWFcVQS/bot-mainpage.png)

Copy the token using the `copy` blue button and put it in a safe place. **If you suspect someone could be using your token, regenerate it immediatly**. This is going to discard the previus token and give you another one.
<hr>

*Optional*: I always turn off the public bot option. Mainly because I've never made a bot intended for a massive use. When you turn off this option, only your account can add the bot user to servers. Some functions may become corrupt if they're not made but working for multiple servers.

![publicbot](https://i.ibb.co/vw1PYkf/public-bot.png)

<hr>

**Important step**: Now you need a permission integer (a number, if you're not familiar with coding terms). Integer is a number value: 5 isn't equal to "5" or "five". The number bellow will change as you select permissions. This permissions should be enough for a text-based chatbot. You can change the permissions later, so don't worry if you want to add further functions. Put the permissions you want (you can just copy mine), and save the number you get bellow.

![permissions](https://i.ibb.co/HVr8p5x/permissionsdone.png)

You're done with this step. Save the info you've got in a safe place and continue to next one.

# 2nd Step: Add your bot user to your server

```utf-8
Hey! You're doing pretty well.
```

Now, I highly recommend test and develop your bot in a "test field", a server only with that purpose: only you and a few trusted collaborators if you want. Coding may be a constant trial and error sometimes. Add new functions or features may be a buggy process and you must reduce risk (spam, weird text responses, channel deletions, etc.) at all cost.

<hr>

```utf-8
Anybody who has never made a mistake, has never tried something new.
Albert Einstein
```

<hr>

You may need this now:

```utf-8
https://discordapp.com/oauth2/authorize?&client_id=(HERE YOU MUST PUT YOUR CLIENT ID WITHOUT PARENTHESIS)&permissions=(HERE YOU MUST PUT THE PERMISSIONS CODE WITHOUT PARENTHESIS)&scope=bot
```

You now should replace the Client ID and Permissions integer in their respective place.

>You got a copy of this on [config.json](/config.JSON), under the dbotAuth label 😉

Once you replace the values, enter the link in your web browser.

The invitation screen will look like this (but in your language). The gray box opens an array list of all your servers you're authorized to add new bot users (The *Manage server* permission or admin one). Once you've selected the correct server, click blue `continue` box. Next you'll see the permissions the bot needs (the ones you've selected before), authorize them with the right blue button. Next step is to fill a captcha. That wouldn't be a problem, [unless you're not human... I couln't help you with that](https://pastebin.com/raw/3ZeMKZx4).

![invitation](https://i.ibb.co/09m3q8p/invitation.png)

*Tadaa!* Your bot user is now a member of your server, and appears on the right column as an offline user. That's because our bot user is "empty". The good thing is we're ready for actual code.

![discord server](https://i.ibb.co/pfHYdT7/discord-open.png)

# 3rd step: Clone this repository into your system and set up your variables

You've got two options for this:

- *Option 1*: Download the repository directly from GitHub, click on the `clone or download` label, then download as a zip (or Git client, if you got it in your PC). The same link is here:

  [![Github All Releases](https://img.shields.io/github/downloads/atom/atom/total.svg?style=flat)](https://github.com/EldknMD/discord-js-chatbot-template/archive/master.zip)
  I recommend this option if you're not familiar with the next one's terms.

- *Option 2*: Use `git clone` command to clone this repository into your local storage.

Once you got the .zip file, you should extract it. You can rename the folder if you want.

Then, open the main directory (just inside the folder) should be like this:

```utf-8
-commands
  > embed.js
  > hello.js
-.gitignore
-bot.js
-config.json
-LICENSE
-package-lock.json
-package.json
-README.md
-READMESPA.md
```

#### Replace the default variables with your bot user ones

In order to get your bot working, you only need to replace your token on `config.json`, but you may want to know the customizable code on the bot:

1. On `config.json`:

   - *Optional* **Your bot prefix**: A prefix is the "warning" message the bot is looking for start a script. Is a "listen up the following" message. The default prefix I set is `>`. You can change it to whatever your want. Even words or numbers. In my opinion, the simpler, the better: single character, easy to remember and type, but not easy enough to type it by mistake (`.` and `,` are bad options because of their position on a QWERTY keyboard and due their common use in english; spanish and other romanic languages).

   - **Your bot user token**: replace the placeholder with your bot token, from 1st step. This is very important to connect your program with the bot user you made.

   - *Optional* **Your Discord user ID**: In order to get a quick and error log, the bot will dm you the cause of the error. This is specially recommended if you're planning build more code upon the one I put here. It's a long number, and you can get it setting up the dev mode in options > advanced,  then right clicking in yourself and selecting `copy ID`.

   - *Optional* **Complete the invitation link**: Even if you're planning just having the bot in one server and never move it, is always good have a replacement link in case you expulse the bot user from a server, or any related trouble.

2. On `bot.js`:

   - *Optional* **14th line**: customize the dm answer your bot will send. This ussualy is something like "I can't obey dm's so please don't send them" as the one I set, but you can write anything you want.

   - **18th line**: set the welcome channel by putting it ID in the `X` between quotes (right click on the desired channel on Discord using developer mode and then `copy ID`).

   - *Optional* **19th to 25th lines**: customize the embed (like "composite") welcome message this bot sends upon the reception of a new member in the server. There is a short comment bellow these lines with the embed message components.

   - *Optional* **39th to 52nd lines**: There's three default word-triggeed reactions by default. The triggers are `hello` , `good bye` and [`on a mote of dust, suspended in a sunbeam`](https://www.youtube.com/watch?v=GO5FwsblpT8). The reactions are the [unicode](https://unicode.org/emoji/charts/full-emoji-list.html) emojis one line below the `message.content` statement. Only this kind of emojis are allowed in the way it's coded here. I'll add more ways to do it in the [wiki](https://github.com/EldknMD/discord-js-chatbot-template/wiki) in the future.

   - *Optional yet my favorite* **54th to 59th and 65th line**: the `const botStateArray` contains different "activities" for your bot. They are seen as `Playing (some text here)` in the right column of the server (much like a human user when playing a game or listening music). Edit the text inside the quotes and it'll be shown as the bot activity. You can add more lines, always keeping them between commas. You also can delete some elements of the array or cut it out completely, which will delete the bot activity text from Discord.
   65th line sets the cooldown between the bot activity change in miliseconds ~~1000 miliseconds = 1 second~~.

That's all.
Now I need to tell you something about code: 

# All is customizable!

Maybe not so literal, but, at some grade, is like painting or writing: 

> `There is not only one way to make things work.`

This programs uses only one library, [Discord.js](https://discord.js.org/#/), which allows the connection with Discord API using my favorite programming language: `Javascript`, as well providing many functions that simplifies the process of coding. I'm not even close of use all the possible interactions for this library plus the vanilla Javascript ones.

The best way to learn this sort of things ~~as well many things in life~~ is to try, fail, try again, fail again and repeat. I'll try to put some examples on this repository in the future, but there is plenty of these in the internet, anyways. I urge you to try out. Tell me any problem you got in the process and I'll try to help you out (here or on my Discord `EldknMD#4471`) ASAP.

And now...

# 4th and final step: Install the bot dependencies and... `RUN`

*(Wild electronic music playing)*

Congratulations for being here. You're almost done.

You've got everything you need.

1. Open your main directory (the folder where `bot.js` is).

   ![main directory](https://i.ibb.co/d5ZpfjZ/before-install.png)

2. Right click the folder background while pressing control and shift. This should add the `Open PowerShell here` option to the contextual menu. Select this option.

3. A big blue screen should appear now. Don't be afraid: this blue screen is what we want.

   [powershell](https://i.ibb.co/02D588Q/powershell.png)

   As you may notice, the console is running in your bot's folder. 

   If you got [Node.js](https://nodejs.org/en/download/current/) installed on your system, the next step is to run

   ```node
   npm install
   ```

   ~~press enter to run~~

   If you didn't knew before, npm stands for **N**ode **P**ackage **M**anager. It's an utility of Node, and helps you to easily install 3rd party code, simplifying even more the coding process. There is a lot of public packages on [npmjs website](https://www.npmjs.com/).

   By sending that command to Powershell, you order the console to search `npm` and then to run`install`. You told npm to install all the dependencies on`package.json`, just discord.js in this case, and all the subdependencies in `package-lock.json`. Normally, you've to make `package.json` by using `npm init`, but I've got you covered this time.

4. **It's time...**: Run...

   ~~I promise this is the last time I'm gonna tell that bad pun.~~

   ```node
   node .
   ```

   > `node bot.js` also should work, but `. = the main script here` which is defined on `package.json`

   You should see this:

   ![alive](https://i.ibb.co/HFzPKvy/It-s-alive.png)

   As you can see, the `console.log()` in the first lines of `bot.js` appear here. All seven lines should indicate nothing is wrong.

   Surprise! Our new "friend" is now connected. ~~Not me, don't disturb~~

   ![botonline](https://i.ibb.co/6JsXNSy/online-bot.png)

   To be secure, let's try out their functions.

- [x] Activities change randomly every 10 seconds:

- [x] Reacts to certain words.

    ![reactions](https://i.ibb.co/vPCdv4w/reacts.png)

- [x] Answers given commands: two by the moment I wrote this. My prefix is `-`.

    ![commands](https://i.ibb.co/X5XnVBd/comamnds.png)

- [x] Cheerfully welcomes new members. This command also announces the new member on the console ~~but is less inspiring~~

    ![welcome](https://i.ibb.co/Tr33X03/welcome.png)

# That's all, my friend

Your bot will work until end of time now... unless you disconnect PowerShell or turn off your PC. But don't worry... The next step will  bring the for solution that. Coming up: hosting ~~specially free one~~.

I'm pretty sure you've undertand almost everything, you look like a pretty smart human. Don't doubt to comment or send me any questions here or to my discord `(human user)` account EldknMD#4471. I've made this short guide thining in what I wanted to find when I started to code some time ago.

My firsts programs were discord chat bots, so is much like my "main" skill. I've got a lot of things to learn yet, anyways.

I'll try to add more content to this repository in the future.

Happy coding! 🤓
