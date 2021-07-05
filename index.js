require('dotenv').config();

const discord = require('discord.js');
const AdminCommand = require('./commands/admin.js');
const HelloCommand = require('./commands/hello.js');
const HelpCommand = require('./commands/help.js');
const client = new discord.Client();

const InfoCommand = require('./commands/info.js')
const { registeredCommand } = require('./common/common.js');

// const commandSet = new Set();


// /** @type {Map<string, any>} */
// const commandMap = new Map();

client.on('ready', ()=> {
    console.log('Myy Bot Is Running Boy!!!');
});

client.on('message', async function (msg) {
    if(msg.author.bot || !msg.guild){
        return;
    }

    let content = msg.cleanContent;
    const { getConfig } = require('./common/common.js');
    const prefix = getConfig().prefix;

    if(!content.startsWith(prefix)) {
        return;
    }

    content = content.substr(prefix.length);
    const array = content.split(' ');
    const name = array.shift().toLowerCase();

    const cmd = registeredCommand.findCommand(name);
    
    if (cmd) {
        await cmd.execute(msg, array);
    }

});

// // commandMap.set('info', new InfoCommand());
// commandSet.add(new InfoCommand());
// commandSet.add(new HelloCommand());
// commandSet.add(new HelpCommand(commandSet));

registeredCommand.addCommand(new InfoCommand());
registeredCommand.addCommand(new HelpCommand(registeredCommand));
registeredCommand.addCommand(new HelloCommand());
registeredCommand.addCommand(new AdminCommand());

client.login(process.env['BOT_TOKEN']);
//alternativ
// client.login(process.env.BOT_TOKEN);