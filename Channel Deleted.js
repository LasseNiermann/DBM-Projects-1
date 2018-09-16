{
  "name": "channel-deleted",
  "temp": "channeldeleted",
  "event-type": "9",
  "_id": "LVnFA",
  "actions": [
    {
      "channel": "3",
      "varName": "channeldeleted",
      "info": "2",
      "storage": "1",
      "varName2": "channelname",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "channelname",
      "comparison": "5",
      "value": "ticket-",
      "iftrue": "1",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "3",
      "varName": "channeldeleted",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Channel Info"
    },
    {
      "channel": "3",
      "varName": "channeldeleted",
      "info": "5",
      "storage": "1",
      "varName2": "position",
      "name": "Store Channel Info"
    },
    {
      "channel": "3",
      "varName": "channeldeleted",
      "info": "6",
      "storage": "1",
      "varName2": "isnsfw",
      "name": "Store Channel Info"
    },
    {
      "title": "Channel Deleted",
      "author": "",
      "color": "RED",
      "timestamp": "true",
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
      "fieldName": "Name",
      "message": "#${tempVars(\"channelname\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "ID",
      "message": "${tempVars(\"id\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "6",
      "varName2": "mlchannel",
      "name": "Send Embed Message"
    }
  ]
}