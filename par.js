{
  "name": "par",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "eZozg",
  "actions": [
    {
      "storage": "0",
      "varName": "del",
      "name": "Delete Message"
    },
    {
      "info": "1",
      "find": "Management Team",
      "storage": "1",
      "varName": "mteam",
      "name": "Find Role"
    },
    {
      "member": "1",
      "varName": "",
      "role": "3",
      "varName2": "mteam",
      "iftrue": "3",
      "iftrueVal": "4",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check If Member has Role"
    },
    {
      "title": "",
      "author": "",
      "color": "#36393F",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "error",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "error",
      "message": ":x: You are not authorized!\nLacking role: `Management Team`\n\nIf you think this is an error, contact an owner.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "error",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "channel",
      "name": "Store Channel Info"
    },
    {
      "info": "1",
      "find": "Support Team",
      "storage": "1",
      "varName": "supportrole",
      "name": "Find Role"
    },
    {
      "channel": "0",
      "varName": "",
      "role": "3",
      "varName2": "supportrole",
      "permission": "READ_MESSAGES",
      "state": "2",
      "name": "Set Role Channel Perms"
    },
    {
      "storage": "0",
      "varName": "",
      "toChange": "parent",
      "newState": "${serverVars(\"adminCategoryID\")}",
      "name": "Edit Channel"
    },
    {
      "title": "",
      "author": "",
      "color": "#36393F",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "success",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "success",
      "message": ":x: Removed the support team from the ticket.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "success",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ]
}