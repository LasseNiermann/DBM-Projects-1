{
  "name": "toggle",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "BCypG",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "dataName": "discordantilink",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "discord",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "iplogger",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "iplogger",
      "name": "Store Server Data"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "type",
      "name": "Store Command Params"
    },
    {
      "message": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "text",
      "name": "Store Message Info"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "discord",
      "iftrue": "2",
      "iftrueVal": "9",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "type",
      "comparison": "1",
      "value": "ip-logger",
      "iftrue": "2",
      "iftrueVal": "16",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: Put `discord` or `ip-logger`",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "discordantilink",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "13",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "discordantilink",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":white_check_mark: Disabled discord anti links.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "discordantilink",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":white_check_mark: Enabled discord anti links.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "iplogger",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "20",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "iplogger",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":white_check_mark: Disabled ip logger anti links.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "iplogger",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":white_check_mark: Enabled ip logger anti links.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ],
  "comType": "0"
}