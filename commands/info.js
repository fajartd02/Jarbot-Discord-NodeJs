const { Message, MessageEmbed } = require('discord.js')
const { getConfig } = require('../common/common.js');

class InfoCommand {

    constructor() {
        this.name = 'info';
        this.aliases = ['jar', 'informasi', 'what', 'fajar'];
        this.desc = 'Shows the information dudeee';
        this.usage = getConfig().prefix + 'info/jar/informasi/what/fajar';
    }

    /**
     * 
     * @param {Message} msg 
     * @param {string[]} args 
     */
    async execute(msg, args) {
       const { author, guild, channel } = msg; 

       const embed = new MessageEmbed()
            .setTitle('**MESSAGE INFO!**')
            .setAuthor(author.username, author.avatarURL())
            .addField('**Your Username**', author.username, true)
            .addField('**Guild Name**', guild.name, true)
            .addField('**Channel Name**', channel.name, true)
            .addField('Check This Out', '[Click Here](https://www.google.com)')
            .setImage('https://image.shutterstock.com/image-illustration/anime-looking-beautyfull-sakura-260nw-1880559073.jpg')
            .setThumbnail('https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/10/03Titan.jpg?auto=format&q=60&fit=max&w=930')
            // .setDescription(
            //     `**You are:** ${author.username}\n` +
            //     `Guild name: ${guild.name}\n`+ 
            //     `**Channel name :** ${channel.name}\n`)
            .setColor('LIGHT_GREY')
            .setFooter('Copyright 2021', 'https://image.shutterstock.com/image-illustration/anime-looking-beautyfull-sakura-260nw-1880559073.jpg');

        await channel.send(embed);

        //cara manual
    //    await channel.send(
    //         '**Jarbot Made By Fajar Ganteng**\n' +
    //         '\n' +
            // `You are: ${author.username}\n` +
            // `Guild name: ${guild.name}\n`+ 
            // `Channel name : ${channel.name}` +
    //         '\n'
    //    );
    }
}

module.exports = InfoCommand;