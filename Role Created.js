{
  "name": "role-created",
  "temp": "rolecreated",
  "event-type": "10",
  "_id": "ChohJ",
  "actions": [
    {
      "time": "7",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "role": "3",
      "varName": "rolecreated",
      "info": "2",
      "storage": "1",
      "varName2": "name",
      "name": "Store Role Info"
    },
    {
      "storage": "1",
      "varName": "name",
      "comparison": "5",
      "value": "ticket-",
      "iftrue": "1",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "role": "3",
      "varName": "rolecreated",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Role Info"
    },
    {
      "role": "3",
      "varName": "rolecreated",
      "info": "3",
      "storage": "1",
      "varName2": "color",
      "name": "Store Role Info"
    },
    {
      "title": "Role Created",
      "author": "",
      "color": "${tempVars(\"color\")}",
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
      "message": "${tempVars(\"rolecreated\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Color",
      "message": "${tempVars(\"color\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "ID : ${tempVars(\"id\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
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