{
  "name": "command_log",
  "temp": "message",
  "event-type": "2",
  "_id": "tNqNE",
  "actions": [
    {
      "info": "19",
      "storage": "1",
      "varName2": "prefix",
      "name": "Store Bot Client Info"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "2",
      "storage": "1",
      "varName2": "txt",
      "name": "Store Message Info"
    },
    {
      "storage": "1",
      "varName": "txt",
      "comparison": "5",
      "value": "tempVars(\"prefix\")",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "3",
      "storage": "1",
      "varName2": "auth",
      "name": "Store Message Info"
    },
    {
      "member": "2",
      "varName": "auth",
      "info": "7",
      "storage": "1",
      "varName2": "tag",
      "name": "Store Member Things"
    },
    {
      "member": "2",
      "varName": "auth",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
    },
    {
      "storage": "2",
      "varName": "total",
      "changeType": "1",
      "value": "1",
      "name": "Control Variable"
    },
    {
      "storage": "2",
      "varName": "total",
      "name": "Save Variable"
    },
    {
      "title": "",
      "author": "${tempVars(\"tag\")}",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"avatar\")}",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"avatar\")}",
      "storage": "1",
      "varName": "embd",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embd",
      "message": "${tempVars(\"auth\")} has initiated a command.\n",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embd",
      "fieldName": "Command",
      "message": "${tempVars(\"message\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embd",
      "fieldName": "Total Commands Ran",
      "message": "${serverVars(\"total\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embd",
      "channel": "6",
      "varName2": "mlchannel",
      "name": "Send Embed Message"
    }
  ]
}
