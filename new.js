{
  "name": "new",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "zExCp",
  "actions": [
    {
      "info": "1",
      "find": "ticket-logs",
      "storage": "1",
      "varName": "ticketLogsChannel",
      "name": "Find Channel"
    },
    {
      "channel": "3",
      "varName": "ticketLogsChannel",
      "info": "3",
      "storage": "1",
      "varName2": "ticketLogsCategory",
      "name": "Store Channel Info Things"
    },
    {
      "channel": "3",
      "varName": "ticketLogsCategory",
      "info": "1",
      "storage": "1",
      "varName2": "ticketLogsCategoryID",
      "name": "Store Channel Info"
    },
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "text",
      "name": "Store Command Params"
    },
    {
      "info": "19",
      "storage": "1",
      "varName2": "prefix",
      "name": "Store Bot Client Info"
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
      "member": "1",
      "varName": "",
      "info": "7",
      "storage": "1",
      "varName2": "tag",
      "name": "Store Member Things"
    },
    {
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "authordisplay",
      "name": "Store Member Info"
    },
    {
      "condition": "0",
      "comparison": "2",
      "value": "0",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "**Error** No reason was specified.\nWe cannot create your ticket unless there is a reason for one.\n\n`${tempVars(\"prefix\")}new <reason>`",
      "storage": "1",
      "varName2": "warning",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "warning",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "input": "0",
      "wordLength": "6",
      "storage": "1",
      "varName": "ticketnumber",
      "name": "Randomize Letters"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "tickets",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "ticketamount",
      "name": "Store Server Data"
    },
    {
      "channelName": "ticket-${tempVars(\"ticketamount\")}",
      "topic": "",
      "position": "",
      "storage": "1",
      "varName": "newTicket",
      "name": "Create Text Channel"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "tickets",
      "changeType": "1",
      "value": "1",
      "name": "Control Server Data"
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
      "varName": "error11",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "error11",
      "message": "Thanks for creating a ticket! You can view it by going to ${tempVars(\"newTicket\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "error11",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "info": "1",
      "find": "${tempVars(\"newTicket\")}",
      "storage": "1",
      "varName": "foundTicketChannel",
      "name": "Find Channel"
    },
    {
      "channel": "3",
      "varName": "newTicket",
      "info": "2",
      "storage": "1",
      "varName2": "ticketChannelName",
      "name": "Store Channel Info"
    },
    {
      "storage": "3",
      "varName": "newTicket",
      "permission": "READ_MESSAGES",
      "state": "1",
      "name": "Set Channel Permissions"
    },
    {
      "roleName": "${tempVars(\"ticketChannelName\")}",
      "hoist": "false",
      "mentionable": "false",
      "color": "",
      "position": "",
      "storage": "1",
      "varName": "ticketChannelRole",
      "name": "Create Role"
    },
    {
      "info": "1",
      "find": "Support Team",
      "storage": "1",
      "varName": "supportTeamRole",
      "name": "Find Role"
    },
    {
      "channel": "3",
      "varName": "newTicket",
      "member": "2",
      "varName2": "ticketChannelRole",
      "permission": "READ_MESSAGES",
      "state": "0",
      "name": "Set Member Channel Perms"
    },
    {
      "channel": "3",
      "varName": "newTicket",
      "member": "2",
      "varName2": "supportTeamRole",
      "permission": "READ_MESSAGES",
      "state": "0",
      "name": "Set Member Channel Perms"
    },
    {
      "member": "1",
      "varName2": "",
      "role": "3",
      "varName": "ticketChannelRole",
      "name": "Add Member Role"
    },
    {
      "title": "Ticket Created",
      "author": "",
      "color": "RED",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "ticketEmbed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "ticketEmbed",
      "message": "${member} has created a new ticket.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "ticketEmbed",
      "fieldName": "Subject",
      "message": "${tempVars(\"text\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "ticketEmbed",
      "channel": "5",
      "varName2": "newTicket",
      "name": "Send Embed Message"
    },
    {
      "title": "Ticket Created",
      "author": "",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "ticketEmbedAnnounce",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "ticketEmbedAnnounce",
      "message": "${member} has opened a new ticket ${tempVars(\"newTicket\")}.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "ticketEmbedAnnounce",
      "fieldName": "Ticket ID",
      "message": "ticket-${tempVars(\"ticketamount\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "ticketEmbedAnnounce",
      "channel": "5",
      "varName2": "ticketLogsChannel",
      "name": "Send Embed Message"
    },
    {
      "storage": "3",
      "varName": "newTicket",
      "toChange": "parent",
      "newState": "${serverVars(\"ticketsCategoryID\")}",
      "name": "Edit Channel"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "confirmation",
      "name": "Delete Message"
    }
  ],
  "comType": "0",
  "_aliases": [
    "new",
    "newticket"
  ]
}