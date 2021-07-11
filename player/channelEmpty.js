module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - 音樂停止了因為沒有成員在頻道裡!`);
};