{
  "name": "discord.gg/|discordapp.com/",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "ecPYk",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "dataName": "discordantilink",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "isenabled",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "discordantilink",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Server Data"
    },
    {
      "message": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "message",
      "name": "Store Message Info"
    },
    {
      "storage": "1",
      "varName": "message",
      "comparison": "5",
      "value": "discordapp.com/invite",
      "iftrue": "3",
      "iftrueVal": "1",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "message",
      "comparison": "5",
      "value": "discord.gg/",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "info": "1",
      "find": "Bypass",
      "storage": "1",
      "varName": "role",
      "name": "Find Role"
    },
    {
      "member": "1",
      "varName": "",
      "role": "3",
      "varName2": "role",
      "iftrue": "1",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check If Member has Role"
    },
    {
      "info": "1",
      "find": "mod-logs",
      "storage": "1",
      "varName": "reported",
      "name": "Find Channel"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "message": "0",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "user",
      "name": "Store Message Info"
    },
    {
      "title": "Link Deleted",
      "author": "",
      "color": "RED",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User",
      "message": "${tempVars(\"user\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Reason",
      "message": "Posted a link",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Message",
      "message": "${tempVars(\"message\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "6",
      "varName2": "modlogs-channel",
      "name": "Send Embed Message"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: Do not post discord links, ${member}!",
      "storage": "1",
      "varName2": "del",
      "name": "Send Message"
    },
    {
      "time": "3",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "del",
      "name": "Delete Message"
    }
  ],
  "comType": "1"
}