{
  "name": "data",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "XKDUW",
  "actions": [
    {
      "condition": "1",
      "comparison": "0",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "2",
      "iffalse": "2",
      "iffalseVal": "15",
      "name": "Check Parameters"
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
      "member": "0",
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
      "varName2": "tag2",
      "name": "Store Member Things"
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
      "fieldName": "Total Reputation",
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
      "message": "Requested by ${tempVars(\"tag2\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed1",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "aavatar",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "7",
      "storage": "1",
      "varName2": "tag2",
      "name": "Store Member Things"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "reputation",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "arep",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "positive-rep",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "apos-rep",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "negative-rep",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "aneg-rep",
      "name": "Store Member Data"
    },
    {
      "title": "",
      "author": "${tempVars(\"tag2\")}",
      "color": "#3df229",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"aavatar\")}",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed2",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Total Reputation",
      "message": "${tempVars(\"arep\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Positive Reputation",
      "message": "${tempVars(\"apos-rep\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Negative Reputation",
      "message": "${tempVars(\"aneg-rep\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ]
}