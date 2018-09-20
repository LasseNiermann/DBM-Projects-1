{
  "name": "report",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "kXtvp",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "dataName": "hasreported",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "hasreported",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "hasbeenreported",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "hasbeenreported",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "info": "7",
      "storage": "1",
      "varName2": "tag",
      "name": "Store Member Things"
    },
    {
      "member": "1",
      "varName": "",
      "info": "7",
      "storage": "1",
      "varName2": "tagau",
      "name": "Store Member Things"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "info": "2",
      "infoIndex": "1",
      "storage": "1",
      "varName": "user",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "2",
      "storage": "1",
      "varName": "proof",
      "name": "Store Command Params"
    },
    {
      "info": "1",
      "infoIndex": "3",
      "storage": "1",
      "varName": "reason",
      "name": "Store Command Params"
    },
    {
      "storage": "2",
      "varName": "report-channel",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: Report channel has not been set",
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
      "dataName": "hasbeenreported",
      "comparison": "1",
      "value": "2",
      "iftrue": "0",
      "iftrueVal": "2",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: This user has already been reported twice in the past 10 minutes.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hasreported",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "2",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: You have already reported someone in the past 5 minutes.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "tag",
      "comparison": "1",
      "value": "tempVars(\"tagau\")",
      "iftrue": "0",
      "iftrueVal": "2",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: You cannot report yourself",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "condition": "0",
      "comparison": "2",
      "value": "3",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: Please mention a user, provide proof & a valid reason!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "proof",
      "comparison": "5",
      "value": "http://",
      "iftrue": "3",
      "iftrueVal": "3",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "proof",
      "comparison": "5",
      "value": "https://",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: Please use a valid link.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
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
      "title": "",
      "author": "${tempVars(\"tagau\")}",
      "color": "RED",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"avatar\")}",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"avatar\")}",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "${member} has reported ${mentionedUser}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Reason",
      "message": "${tempVars(\"reason\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Proof",
      "message": "[Click me](${tempVars(\"proof\")})\nRaw link: ${tempVars(\"proof\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "6",
      "varName2": "report-channel",
      "name": "Send Embed Message"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":white_check_mark: Reported ${mentionedUser} for `${tempVars(\"reason\")}`",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hasreported",
      "changeType": "0",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "hasbeenreported",
      "changeType": "1",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "time": "5",
      "measurement": "2",
      "name": "Wait"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hasreported",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "time": "5",
      "measurement": "2",
      "name": "Wait"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "hasbeenreported",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "hasbeenreported",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "hasbeenreported",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    }
  ]
}