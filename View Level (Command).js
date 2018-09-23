{
  "name": "level",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "JfcSy",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "serverid",
      "name": "Store Server Info"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "level",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "level",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "level",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "mlevel",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "exp",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "mxp",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "exp",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "xp",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "mavatar",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "7",
      "storage": "1",
      "varName2": "mtag",
      "name": "Store Member Things"
    },
    {
      "member": "1",
      "varName": "",
      "info": "7",
      "storage": "1",
      "varName2": "tag",
      "name": "Store Member Things"
    },
    {
      "condition": "1",
      "comparison": "0",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "22",
      "name": "Check Parameters"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "hastalked",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Member Data"
    },
    {
      "storage": "1",
      "varName": "talkedhas",
      "changeType": "0",
      "value": "\"✅\"",
      "name": "Control Variable"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "talkedhas",
      "changeType": "0",
      "value": "\"❌\"",
      "name": "Control Variable"
    },
    {
      "title": "",
      "author": "${tempVars(\"mtag\")}",
      "color": "#00faff",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"mavatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "User is on cooldown: ${tempVars(\"talkedhas\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Level",
      "message": "${tempVars(\"mlevel\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "XP/XP Needed",
      "message": "(${tempVars(\"mxp\")}/${tempVars(\"mlevel\") * 5})",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "User on cooldown: ",
      "footerIcon": "${tempVars(\"avatar\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hastalked",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Member Data"
    },
    {
      "storage": "1",
      "varName": "talkedhas",
      "changeType": "0",
      "value": "\"✅\"",
      "name": "Control Variable"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "talkedhas",
      "changeType": "0",
      "value": "\"❌\"",
      "name": "Control Variable"
    },
    {
      "title": "",
      "author": "${tempVars(\"tag\")}",
      "color": "#00faff",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed2",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "message": "User is on cooldown: ${tempVars(\"talkedhas\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Level",
      "message": "${tempVars(\"level\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "XP/XP Needed",
      "message": "(${tempVars(\"xp\")}/${tempVars(\"level\") * 5})",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ],
  "comType": "0"
}