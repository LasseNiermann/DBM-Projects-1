{
  "name": "adduser",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "eufim",
  "actions": [
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "info": "1",
      "find": "ticket-logs",
      "storage": "1",
      "varName": "ticketlogs",
      "name": "Find Channel"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "channelname",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "channelname",
      "comparison": "5",
      "value": "'ticket-'",
      "iftrue": "3",
      "iftrueVal": "6",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
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
      "message": ":x: You are not in a ticket channel.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "error",
      "channel": "0",
      "varName2": "",
      "varName3": "dell",
      "storage3": "1",
      "name": "Send Embed Message MOD"
    },
    {
      "time": "2",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "dell",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "1",
      "find": "${tempVars(\"channelname\")}",
      "storage": "1",
      "varName": "channelrole",
      "name": "Find Role"
    },
    {
      "info": "2",
      "infoIndex": "1",
      "storage": "1",
      "varName": "mention",
      "name": "Store Command Params"
    },
    {
      "member": "0",
      "varName2": "mention",
      "role": "3",
      "varName": "channelrole",
      "name": "Add Member Role"
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
      "varName": "error2",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "error2",
      "message": ":x: A user has been added to the ticket.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "error2",
      "fieldName": "User Added",
      "message": "${mentionedUser}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "error2",
      "fieldName": "Added by",
      "message": "${member}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "error2",
      "message": "Shiba | Management Bot",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "error2",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "title": "User added to Ticket",
      "author": "",
      "color": "#36393F",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "addembed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "addembed",
      "message": ":x: A user has been added to a ticket.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "addembed",
      "fieldName": "Ticket ID",
      "message": "${tempVars(\"channelname\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "addembed",
      "fieldName": "Added User",
      "message": "${mentionedUser}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "addembed",
      "fieldName": "Added By",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "addembed",
      "channel": "5",
      "varName2": "ticketlogs",
      "name": "Send Embed Message"
    }
  ],
  "_aliases": [
    "add"
  ]
}