{
  "name": "grabify.link|bmwforum.co|leancoding.co|quickmessage.io|spottyfly.com|spötify.com|stopify.co|yoütu.be|yoütübe.co|yoütübe.com|xda-developers.io|starbucksiswrong.com|starbucksisbadforyou.com|bucks.as|discörd.com|minecräft.com|freegiftcards.co|disçordapp.comsärahah.eu|särahah.pl",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "hXwMi",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "dataName": "iplogger",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "isenabled",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "iplogger",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Server Data"
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
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "message": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "text",
      "name": "Store Message Info"
    },
    {
      "title": "IP Logger Deleted",
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
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Reason",
      "message": "Posted an IP LOGGER",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Message",
      "message": "${tempVars(\"text\")}",
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
      "message": ":x: Do not post IP Loggers, ${member}!",
      "storage": "1",
      "varName2": "del",
      "name": "Send Message"
    }
  ],
  "comType": "1"
}