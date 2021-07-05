const { Message, MessageEmbed } = require('discord.js')
const { getConfig, saveConfig } = require('../common/common.js');

class AdminCommand {

    constructor() {
        this.name = 'admin';
        this.aliases = ['adm', 'dev'];
        this.desc = 'Commands For Admins';
        this.usage = getConfig().prefix + 'admin [prefix]';
    }

    /**
     * 
     * @param {Message} msg 
     * @param {string[]} args 
     */
    async execute(msg, args) {
        const { member, channel: ch } = msg;
        const embed = new MessageEmbed();

        if (member.hasPermission('ADMINISTRATOR')) {
                if (!args.length) {
                    embed.setDescription(getConfig().prefix + 'admin [prefix]')
                        .setColor('RED');
                    await ch.send(embed);
                    return;
                }

                switch (args[0].toLowerCase()) {
                    case 'prefix': {
                        const config = getConfig();
                        if(args.length < 2) {
                            config.prefix = '~';
                        } else {
                            config.prefix = args[1];
                        }
                        embed.setDescription('**Success To changed prefix to ' + config.prefix + "**")
                             .setColor('BLUE');
                        await ch.send(embed);

                        saveConfig(config);
                        break;
                    }
                    default:{
                        await this.execute(msg,[]);
                        break;
                    }   
                }

        } else {
            embed.setDescription('No Permission!')
                 .setDescription('RED');

            await ch.send(embed);
        }
    }
 
}

module.exports = AdminCommand ;