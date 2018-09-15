{
  "name": "active",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "IUIYK",
  "actions": [
    {
      "storage": "0",
      "varName": "",
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
      "storage": "0",
      "varName": "",
      "toChange": "parent",
      "newState": "${serverVars(\"ticketsCategoryID\")}",
      "name": "Edit Channel"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: The ticket is now set as active.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ]
}