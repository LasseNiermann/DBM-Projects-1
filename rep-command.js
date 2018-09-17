{
  "name": "rep",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "oOpcD",
  "actions": [
    {
      "member": "0",
      "varName": "",
      "dataName": "reputation",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "rep",
      "name": "Store Member Data"
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
      "dataName": "negative-rep",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "neg-rep",
      "name": "Store Member Data"
    },
    {
      "info": "2",
      "infoIndex": "1",
      "storage": "1",
      "varName": "member",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "2",
      "storage": "1",
      "varName": "positive-negative",
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
      "message": ":x: You cant rep yourself..",
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
      "varName2": "txt",
      "name": "Store Message Info"
    },
    {
      "condition": "0",
      "comparison": "2",
      "value": "3",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "2",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: Use the correct format.\n`rep @user positive/negative reason`",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "positive-negative",
      "comparison": "1",
      "value": "positive",
      "iftrue": "2",
      "iftrueVal": "20",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "positive-negative",
      "comparison": "1",
      "value": "negative",
      "iftrue": "2",
      "iftrueVal": "41",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: Please put `positive` or `negative`!",
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
      "dataName": "sentposrep",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: You have to wait atleast 12 hours before being able to send another positive rep.",
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
      "changeType": "1",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "positive-rep",
      "changeType": "1",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
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
      "member": "0",
      "varName": "",
      "dataName": "reputation",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "rep",
      "name": "Store Member Data"
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
      "dataName": "negative-rep",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "neg-rep",
      "name": "Store Member Data"
    },
    {
      "title": "",
      "author": "${tempVars(\"tag\")}",
      "color": "#3df229",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed1",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed1",
      "message": "${member} Successfully sent a `positive` reputation point to  ${mentionedUser}\n",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed1",
      "fieldName": "Total Reputation Now",
      "message": "${tempVars(\"rep\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed1",
      "fieldName": "Positive Reputation",
      "message": "${tempVars(\"pos-rep\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed1",
      "fieldName": "Negative Reputation",
      "message": "${tempVars(\"neg-rep\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed1",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "sentposrep",
      "changeType": "0",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "time": "12",
      "measurement": "3",
      "name": "Wait"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "sentposrep",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "You can now send positive reputation again!",
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
      "dataName": "sentnegrep",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":x: You have to wait atleast 12 hours before being able to send another negative rep.",
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
      "changeType": "1",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "negative-rep",
      "changeType": "1",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
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
      "member": "0",
      "varName": "",
      "dataName": "reputation",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "rep",
      "name": "Store Member Data"
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
      "title": "",
      "author": "${tempVars(\"tag\")}",
      "color": "#ff6854",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"avatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed2",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "message": "${member} Successfully sent a `negative` reputation point to  ${mentionedUser}\n",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Total Reputation Now",
      "message": "${tempVars(\"rep\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Positive Reputation",
      "message": "${tempVars(\"pos-rep\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Negative Reputation",
      "message": "${tempVars(\"neg-rep\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "sentnegrep",
      "changeType": "0",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "time": "12",
      "measurement": "3",
      "name": "Wait"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "sentnegrep",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "You can now send negative reputation again!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ]
}