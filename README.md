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

- `token`, 機器人的token
- `prefix`, 機器人的指令開頭.
- `activity`, 機器人的上線狀態.

在主控台,輸入`npm install`以開始安裝需要的檔案.

- 讓機器人上線 :

```
#Node
node index.js
npm start #Indicated in package.json

#pm2
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

### 💡 一般指令

```
ping, 查看延遲.
help, 指令說明.
debug, 目前連接的語音頻道數量.
```

### 🏓 使用的素材 (to change the code)

Find all the functions available on the official code [right here](https://github.com/Androz2091/discord-player).

This is used with [discord.js](https://www.npmjs.com/package/discord.js) and [discord-player](https://www.npmjs.com/package/discord-player).
 music-bot

