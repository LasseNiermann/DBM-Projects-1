{
  "name": "leaderboard",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "SDoZv",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "serverid",
      "name": "Store Server Info"
    },
    {
      "storage": "1",
      "varName": "test",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "SELECT xp,userid FROM `${tempVars(\"serverid\")}` ORDER BY xp DESC;",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "exist0",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[0].userid}\"",
      "name": "Control Variable"
    },
    {
      "comment": "",
      "color": "#000000",
      "name": "Comment"
    },
    {
      "storage": "1",
      "varName": "exist1",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[1].userid}\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "exist2",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[2].userid}\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "exist3",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[3].userid}\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "exist4",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[4].userid}\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "exist5",
      "changeType": "0",
      "value": "${tempVars(\"test\")[5].userid}",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "exist6",
      "changeType": "0",
      "value": "${tempVars(\"test\")[6].userid}",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "exist7",
      "changeType": "0",
      "value": "${tempVars(\"test\")[7].userid}",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "exist8",
      "changeType": "0",
      "value": "${tempVars(\"test\")[8].userid}",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "exist9",
      "changeType": "0",
      "value": "${tempVars(\"test\")[9].userid}",
      "name": "Control Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "0",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[0].userid}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "1",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[1].userid}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "2",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[2].userid}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "3",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[3].userid}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "4",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[4].userid}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "5",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[5].userid}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "6",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[6].userid}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "7",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[7].userid}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "8",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[8].userid}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "9",
      "changeType": "0",
      "value": "\"${tempVars(\"test\")[9].userid}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "1",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "1",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "2",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "2",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "3",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "3",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "4",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "4",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "5",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "5",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "6",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "6",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "7",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "7",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "8",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "8",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "0",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "0",
      "name": "Store Server Data"
    },
    {
      "storage": "1",
      "varName": "0",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "138",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "1",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "1",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "2",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "2",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "3",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "3",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "4",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "4",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "5",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "5",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "6",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "6",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "7",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "7",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "8",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "8",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "9",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "9",
      "name": "Store Server Data"
    },
    {
      "storage": "1",
      "varName": "l0",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "SELECT xp\nFROM `${tempVars(\"serverid\")}`\nWHERE userid = ${tempVars(\"0\")};",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "l1",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "SELECT xp\nFROM `${tempVars(\"serverid\")}`\nWHERE userid = ${tempVars(\"1\")};",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "l2",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "SELECT xp\nFROM `${tempVars(\"serverid\")}`\nWHERE userid = ${tempVars(\"2\")};",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "l3",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "SELECT xp\nFROM `${tempVars(\"serverid\")}`\nWHERE userid = ${tempVars(\"3\")};",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "l4",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "SELECT xp\nFROM `${tempVars(\"serverid\")}`\nWHERE userid = ${tempVars(\"4\")};",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "l5",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "SELECT xp\nFROM `${tempVars(\"serverid\")}`\nWHERE userid = ${tempVars(\"5\")};",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "l6",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "SELECT xp\nFROM `${tempVars(\"serverid\")}`\nWHERE userid = ${tempVars(\"6\")};",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "l7",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "SELECT xp\nFROM `${tempVars(\"serverid\")}`\nWHERE userid = ${tempVars(\"7\")};",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "l8",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "SELECT xp\nFROM `${tempVars(\"serverid\")}`\nWHERE userid = ${tempVars(\"8\")};",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "l9",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "SELECT xp\nFROM `${tempVars(\"serverid\")}`\nWHERE userid = ${tempVars(\"9\")};",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l1",
      "changeType": "0",
      "value": "\"${tempVars(\"l1\")[0].xp}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l2",
      "changeType": "0",
      "value": "\"${tempVars(\"l2\")[0].xp}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l3",
      "changeType": "0",
      "value": "\"${tempVars(\"l3\")[0].xp}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l4",
      "changeType": "0",
      "value": "\"${tempVars(\"l4\")[0].xp}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l5",
      "changeType": "0",
      "value": "\"${tempVars(\"l5\")[0].xp}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l6",
      "changeType": "0",
      "value": "\"${tempVars(\"l6\")[0].xp}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l7",
      "changeType": "0",
      "value": "\"${tempVars(\"l7\")[0].xp}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l8",
      "changeType": "0",
      "value": "\"${tempVars(\"l8\")[0].xp}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l9",
      "changeType": "0",
      "value": "\"${tempVars(\"l9\")[0].xp}\"",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l1",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "l1",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l2",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "l2",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l3",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "l3",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l4",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "l4",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l5",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "l5",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l6",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "l6",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l7",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "l7",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l8",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "l8",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "l9",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "l9",
      "name": "Store Server Data"
    },
    {
      "text": "${tempVars(\"0\")}",
      "text2": "false",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "0",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"1\")}",
      "text2": "false",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "1",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"2\")}",
      "text2": "false",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "2",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"3\")}",
      "text2": "false",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "3",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"4\")}",
      "text2": "false",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "4",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"5\")}",
      "text2": "false",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "5",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"6\")}",
      "text2": "false",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "6",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"7\")}",
      "text2": "false",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "7",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"8\")}",
      "text2": "false",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "8",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"9\")}",
      "text2": "false",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "9",
      "name": "Replace Text"
    },
    {
      "comment": "-----",
      "color": "#000000",
      "name": "Comment"
    },
    {
      "text": "${tempVars(\"l1\")}",
      "text2": "false",
      "text3": "0",
      "info": "1",
      "storage": "1",
      "varName": "l1",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"l2\")}",
      "text2": "false",
      "text3": "0",
      "info": "1",
      "storage": "1",
      "varName": "l2",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"l3\")}",
      "text2": "false",
      "text3": "0",
      "info": "1",
      "storage": "1",
      "varName": "l3",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"l4\")}",
      "text2": "false",
      "text3": "0",
      "info": "1",
      "storage": "1",
      "varName": "l4",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"l5\")}",
      "text2": "false",
      "text3": "0",
      "info": "1",
      "storage": "1",
      "varName": "l5",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"l6\")}",
      "text2": "false",
      "text3": "0",
      "info": "1",
      "storage": "1",
      "varName": "l6",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"l7\")}",
      "text2": "false",
      "text3": "0",
      "info": "1",
      "storage": "1",
      "varName": "l7",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"l8\")}",
      "text2": "false",
      "text3": "0",
      "info": "1",
      "storage": "1",
      "varName": "l8",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"l9\")}",
      "text2": "false",
      "text3": "0",
      "info": "1",
      "storage": "1",
      "varName": "l9",
      "name": "Replace Text"
    },
    {
      "info": "0",
      "find": "${tempVars(\"1\")}",
      "storage": "1",
      "varName": "1ob",
      "name": "Find Member"
    },
    {
      "info": "0",
      "find": "${tempVars(\"2\")}",
      "storage": "1",
      "varName": "2ob",
      "name": "Find Member"
    },
    {
      "info": "0",
      "find": "${tempVars(\"0\")}",
      "storage": "1",
      "varName": "0ob",
      "name": "Find Member"
    },
    {
      "member": "2",
      "varName": "0ob",
      "info": "2",
      "storage": "1",
      "varName2": "000",
      "name": "Store Member Info"
    },
    {
      "member": "2",
      "varName": "2ob",
      "info": "2",
      "storage": "1",
      "varName2": "222",
      "name": "Store Member Info"
    },
    {
      "member": "2",
      "varName": "1ob",
      "info": "2",
      "storage": "1",
      "varName2": "111",
      "name": "Store Member Info"
    },
    {
      "storage": "1",
      "varName": "111",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "132",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "222",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "135",
      "name": "Check Variable"
    },
    {
      "member": "2",
      "varName": "0ob",
      "storage": "1",
      "varName2": "0av",
      "name": "Create Image from Avatar"
    },
    {
      "call": "102",
      "name": "Jump to Action"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "111",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "104",
      "name": "Check Variable"
    },
    {
      "member": "2",
      "varName": "1ob",
      "storage": "1",
      "varName2": "1av",
      "name": "Create Image from Avatar"
    },
    {
      "storage": "1",
      "varName": "222",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "106",
      "name": "Check Variable"
    },
    {
      "member": "2",
      "varName": "2ob",
      "storage": "1",
      "varName2": "2av",
      "name": "Create Image from Avatar"
    },
    {
      "text": "${tempVars(\"222\")}",
      "text2": "undefined",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "222",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"111\")}",
      "text2": "undefined",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "111",
      "name": "Replace Text"
    },
    {
      "text": "${tempVars(\"000\")}",
      "text2": "undefined",
      "text3": "None!",
      "info": "1",
      "storage": "1",
      "varName": "000",
      "name": "Replace Text"
    },
    {
      "url": "https://cdn.discordapp.com/attachments/488155968572751889/492105704157478928/leaderboard.png",
      "storage": "1",
      "varName": "leaderboardimage",
      "name": "Create Image"
    },
    {
      "storage": "1",
      "varName": "0av",
      "width": "86",
      "height": "86",
      "name": "Resize Image"
    },
    {
      "call": "113",
      "name": "Jump to Action"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "111",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "85",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "1av",
      "width": "86",
      "height": "86",
      "name": "Resize Image"
    },
    {
      "storage": "1",
      "varName": "222",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "87",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "2av",
      "width": "86",
      "height": "86",
      "name": "Resize Image"
    },
    {
      "storage": "1",
      "varName": "leaderboardimage",
      "storage2": "1",
      "varName2": "0av",
      "x": "355",
      "y": "320",
      "mask": "0",
      "name": "Draw Image on Image"
    },
    {
      "call": "120",
      "name": "Jump to Action"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "111",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "92",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "leaderboardimage",
      "storage2": "1",
      "varName2": "1av",
      "x": "214",
      "y": "360",
      "mask": "0",
      "name": "Draw Image on Image"
    },
    {
      "storage": "1",
      "varName": "222",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "94",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "leaderboardimage",
      "storage2": "1",
      "varName2": "2av",
      "x": "496",
      "y": "384",
      "mask": "0",
      "name": "Draw Image on Image"
    },
    {
      "storage": "1",
      "varName": "leaderboardimage",
      "x": "255",
      "y": "211",
      "font": "fonts/Asimov.fnt",
      "width": "",
      "text": "${tempVars(\"111\")}",
      "name": "Draw Text on Image"
    },
    {
      "storage": "1",
      "varName": "leaderboardimage",
      "x": "107",
      "y": "398",
      "font": "fonts/Asimov.fnt",
      "width": "",
      "text": "${tempVars(\"l1\")}",
      "name": "Draw Text on Image"
    },
    {
      "storage": "1",
      "varName": "leaderboardimage",
      "x": "255",
      "y": "133",
      "font": "fonts/Asimov.fnt",
      "width": "",
      "text": "${tempVars(\"000\")}",
      "name": "Draw Text on Image"
    },
    {
      "storage": "1",
      "varName": "leaderboardimage",
      "x": "379",
      "y": "550",
      "font": "fonts/Asimov.fnt",
      "width": "",
      "text": "${tempVars(\"l0\")[0].xp}",
      "name": "Draw Text on Image"
    },
    {
      "storage": "1",
      "varName": "leaderboardimage",
      "x": "255",
      "y": "276",
      "font": "fonts/Asimov.fnt",
      "width": "",
      "text": "${tempVars(\"222\")}",
      "name": "Draw Text on Image"
    },
    {
      "storage": "1",
      "varName": "leaderboardimage",
      "x": "623",
      "y": "398",
      "font": "fonts/Asimov.fnt",
      "width": "",
      "text": "${tempVars(\"l2\")}",
      "name": "Draw Text on Image"
    },
    {
      "storage": "1",
      "varName": "leaderboardimage",
      "channel": "0",
      "varName2": "",
      "message": "",
      "name": "Send Image"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "url": "https://cdn.discordapp.com/attachments/488155968572751889/492840181683191808/question-mark_318-52837.jpg",
      "storage": "1",
      "varName": "1av",
      "name": "Create Image"
    },
    {
      "call": "98",
      "name": "Jump to Action"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "url": "https://cdn.discordapp.com/attachments/488155968572751889/492840181683191808/question-mark_318-52837.jpg",
      "storage": "1",
      "varName": "2av",
      "name": "Create Image"
    },
    {
      "call": "99",
      "name": "Jump to Action"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "No one's on the leaderboards yet!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ],
  "comType": "0"
}