{
  "name": "resetrep",
  "permissions": "ADMINISTRATOR",
  "restriction": "1",
  "_id": "wHTaD",
  "actions": [
    {
      "info": "2",
      "infoIndex": "1",
      "storage": "1",
      "varName": "MEMBER",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "2",
      "storage": "1",
      "varName": "option",
      "name": "Store Command Params"
    },
    {
      "condition": "1",
      "comparison": "0",
      "value": "1",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: Mention someone",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "0",
      "varName": "",
      "info": "7",
      "storage": "1",
      "varName2": "tag11",
      "name": "Store Member Things"
    },
    {
      "member": "1",
      "varName": "",
      "info": "7",
      "storage": "1",
      "varName2": "autag1",
      "name": "Store Member Things"
    },
    {
      "storage": "1",
      "varName": "autag1",
      "comparison": "1",
      "value": "tempVars(\"tag11\")",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: You cant reset yourself..",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
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
      "varName": "text",
      "comparison": "5",
      "value": "all",
      "iftrue": "2",
      "iftrueVal": "17",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "text",
      "comparison": "5",
      "value": "positive",
      "iftrue": "2",
      "iftrueVal": "23",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "text",
      "comparison": "5",
      "value": "negative",
      "iftrue": "2",
      "iftrueVal": "29",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: Select one:\n`all`\n`positive`\n`negative`",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "reputation",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "positive-rep",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "negative-rep",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Finished.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "channel": "2",
      "varName": "",
      "message": "${tempVars(\"autag1\")} has cleared all of your reputation.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "positive-rep",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "pos-rep",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "reputation",
      "changeType": "1",
      "value": "-tempVars(\"pos-rep\")",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "positive-rep",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Finished.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "channel": "2",
      "varName": "",
      "message": "${tempVars(\"autag1\")} has cleared all of your positive reputation.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "negative-rep",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "neg-rep",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "reputation",
      "changeType": "1",
      "value": "-tempVars(\"neg-rep\")",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "negative-rep",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Finished.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "channel": "2",
      "varName": "",
      "message": "${tempVars(\"autag1\")} has cleared all of your negative reputation.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    }
  ]
}