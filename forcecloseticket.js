{
  "name": "forceclose",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "vaDgD",
  "actions": [
    {
      "channel": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "channelName",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "channelName",
      "comparison": "5",
      "value": "'ticket-'",
      "iftrue": "3",
      "iftrueVal": "4",
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
      "varName": "error1",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "error1",
      "message": ":x: You are not in a ticket channel.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "error1",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "1",
      "find": "ticket-logs",
      "storage": "1",
      "varName": "ticketlogs",
      "name": "Find Channel"
    },
    {
      "info": "1",
      "find": "${tempVars(\"channelName\")}",
      "storage": "1",
      "varName": "channelRole",
      "name": "Find Role"
    },
    {
      "info": "1",
      "find": "Support Team",
      "storage": "1",
      "varName": "supportTeam",
      "name": "Find Role"
    },
    {
      "member": "1",
      "varName": "",
      "role": "3",
      "varName2": "supportTeam",
      "iftrue": "3",
      "iftrueVal": "2",
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
      "name": "Delete Channel"
    },
    {
      "storage": "3",
      "varName": "channelRole",
      "name": "Delete Role"
    },
    {
      "title": "Ticket Forceclosed",
      "author": "",
      "color": "#36393F",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "forceClosedTicket",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "forceClosedTicket",
      "message": "A ticket been forcefully closed by Support Member ${member}.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "forceClosedTicket",
      "fieldName": "Ticket ID",
      "message": "${tempVars(\"channelName\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "forceClosedTicket",
      "channel": "5",
      "varName2": "ticketlogs",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "_aliases": [
    "forcecloseticket"
  ]
}
