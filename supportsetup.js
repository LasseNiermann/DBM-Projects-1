{
  "name": "supportsetup",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "NYMuy",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "info": "10",
      "storage": "1",
      "varName2": "owner",
      "name": "Store Member Info"
    },
    {
      "storage": "1",
      "varName": "owner",
      "comparison": "0",
      "value": "",
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
      "varName": "error",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "error",
      "message": ":x: You are not authorized!\n\nLacking `GUILD_OWNER` permission.",
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
      "source": "evt-2",
      "type": "false",
      "name": "Call Command/Event"
    }
  ]
}