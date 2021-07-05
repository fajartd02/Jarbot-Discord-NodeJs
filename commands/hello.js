const discord = require('discord.js')
const { getConfig } = require('../common/common.js');
class HelloCommand {

    constructor() {
        this.name = 'hello';
        this.aliases = ['hi', 'hai'];
        this.desc = 'Use this to get a wonderfull message from me !';
        this.usage = getConfig().prefix + 'hello[ganteng/tampan]';
    }
    
    /**
     * @param {discord.Message} msg 
     * @param {string[]} args 
     */
    async execute(msg, args) {
        const {channel: ch} = msg;
        const {author} = msg;
       if(args.length === 0){
           await ch.send('Invalid Ussage, Use **!hello [ganteng/tampan]**');
           return;
        }
       switch (args[0].toLowerCase()){
            case 'ganteng':
                await ch.send('Hello @' + author.username + ', You Are Handsome!');
                break;
            case 'tampan':
                await ch.send('Hello @' + author.username + ', You Are Handsome!')
                break; 
            default:
                await ch.send('Sorry Dude you are ugly, please insert the valid syntax');
                break;
       }
    }
}

module.exports = HelloCommand;