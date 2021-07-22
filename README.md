# 憨憨音樂Bot
一個已完成ㄉBot. Using a module (discord-player) 🎧

如果有任何需要幫忙的可以私訊給我discord : Han Han#4514

### ⚡ 安裝方式

嗯，就下載然後自己編輯就好
打開 `config` 然後在 `bot.js`.
如果想讓Bot運作,請完成下列動作 :

- 可更改的emoji

```js
emojis: {
    off: ':x:',
    error: ':warning:',
    queue: ':bar_chart:',
    music: ':musical_note:',
    success: ':white_check_mark:',
}
```

- 你需要改的東西

```js
discord: {
    token: 'TOKEN',
    prefix: 'PREFIX',
    activity: 'ACTIVITY',
}
```

- `token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.
- `prefix`, the prefix that will be set to use the bot.
- `activity`, the activity of the bot.

In the console, type `npm install` to install all dependencies.

- To start the bot :

```
#With Node
node index.js
npm start #Indicated in package.json

#With pm2
pm2 start index.js --name "MusicBot"
```

All you have to do is turn on your bot !

### 🎵 音樂指令

```
play <name/URL>, 在語音頻道「直接」撥放音樂。
search <name>, 列出搜尋結果並選擇音樂。
pause, 暫停音樂。
resume, 恢復播放。
queue, 查看待播歌單。
clear-queue, 清空歌單。
shuffle, 隨機撥放。
nowplaying, 正在播放ㄉ音樂。
loop, 開啟或關閉循環撥放。
volume <1 - 100>, 更改音量。
skip, 跳過。
stop, 停止撥放。
filter <filter>, 過濾。
w-filters, 查看有過濾的東西。
```

### 💡 General commands

```
ping, see the bot latency.
help, see the list of available commands.
debug, see number of voice connections.
```

### 🏓 使用的東西 (to change the code)

Find all the functions available on the official code [right here](https://github.com/Androz2091/discord-player).

This is used with [discord.js](https://www.npmjs.com/package/discord.js) and [discord-player](https://www.npmjs.com/package/discord-player).
 music-bot

