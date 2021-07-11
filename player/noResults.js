module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - 沒有在YouTube上搜尋到任何 ${query} !`);
};