const discord = require('discord.js')
const { getConfig } = require('../common/common.js');
class HelpCommand {

    constructor(commands) {
        this.name = 'help';
        this.aliases = [];
        this.commands = commands;
        this.desc = 'Helps Dudeee';
        this.usage = getConfig().prefix + 'help [command name]';
    }
    
    /**
     * @param {discord.Message} msg 
     * @param {string[]} args 
     */
    async execute(msg, args) {
        const { channel : ch, client } = msg;

        if (args.length === 0) {
            const list = this.commands.list;

            const embed = new discord.MessageEmbed()
                .setTitle('Help Command')
                .setDescription(
                    'This is all of the commands exists in the bot' +
                    '\n' +
                    '**Comands**\n| ' +
                    list.map((cmd) => cmd.name).join(' | ') +
                    ' |\n'
                )
                .setColor('BLUE')
                .setThumbnail(client.user.displayAvatarURL());
            
            await ch.send(embed);
        } else {
             const cmd = this.commands.findCommand(args[0]);
             let embed = null;
             if (cmd) {
                embed = new discord.MessageEmbed()
                    .setTitle(cmd.name + 'Command Info')
                    .addField('Name', cmd.name)
                    .addField('Aliases', '[' + cmd.aliases + ']')
                    .addField('Description', cmd.desc)
                    .addField('Usage', '`' + cmd.usage + '`')
                    .setColor('WHITE')
                    .setThumbnail(client.user.displayAvatarURL());
             } else {
                embed = new discord.MessageEmbed()
                    .setDescription('Cannot Find COMMAND!')
                    .setColor('RED');
             }
             await ch.send(embed);
        }
    }
}

module.exports = HelpCommand;