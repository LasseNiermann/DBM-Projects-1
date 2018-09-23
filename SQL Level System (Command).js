{
  "name": "SQL System",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "gdNdV",
  "actions": [
    {
      "member": "1",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Member Info"
    },
    {
      "storage": "1",
      "varName": "randnumb",
      "min": "1",
      "max": "5",
      "name": "Generate Random Number"
    },
    {
      "storage": "1",
      "varName": "randnumb2",
      "min": "1",
      "max": "3",
      "name": "Generate Random Number"
    },
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "serverid",
      "name": "Store Server Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "member",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hastalked",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "talked",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hastalked",
      "comparison": "1",
      "value": "1",
      "iftrue": "1",
      "iftrueVal": "64",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Member Data"
    },
    {
      "member": "2",
      "varName": "member",
      "dataName": "exp",
      "changeType": "1",
      "value": "tempVars(\"randnumb2\")",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hastalked",
      "changeType": "0",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "member": "2",
      "varName": "member",
      "dataName": "level",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "myLevel",
      "name": "Store Member Data"
    },
    {
      "member": "2",
      "varName": "member",
      "dataName": "exp",
      "comparison": "4",
      "value": "${tempVars(\"myLevel\") * 5}",
      "iftrue": "3",
      "iftrueVal": "1",
      "iffalse": "0",
      "iffalseVal": "62",
      "name": "Check Member Data"
    },
    {
      "member": "2",
      "varName": "member",
      "dataName": "exp",
      "comparison": "1",
      "value": "${tempVars(\"myLevel\") * 5}",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "64",
      "name": "Check Member Data"
    },
    {
      "member": "2",
      "varName": "member",
      "dataName": "exp",
      "changeType": "0",
      "value": "0 + tempVars(\"randnumb2\")",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hastalked",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "member": "2",
      "varName": "member",
      "dataName": "level",
      "changeType": "1",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "message": "1",
      "varName": "msg",
      "info": "4",
      "storage": "1",
      "varName2": "channel",
      "name": "Store Message Info"
    },
    {
      "member": "2",
      "varName": "member",
      "dataName": "level",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "myLevel",
      "name": "Store Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${tempVars(\"member\")} reached level ${tempVars(\"myLevel\")}!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "test",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "TWNMv8xf6u4",
      "database": "sadb",
      "query": "INSERT INTO `${tempVars(\"serverid\")}` (userid, xp)\nVALUES (${tempVars(\"id\")},${tempVars(\"myLevel\")});",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "0",
      "varName": "test",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "TWNMv8xf6u4",
      "database": "sadb",
      "query": "UPDATE `${tempVars(\"serverid\")}`\nSET xp = '${tempVars(\"myLevel\")}'\nWHERE userid = ${tempVars(\"id\")};",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "0",
      "varName": "test",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "TWNMv8xf6u4",
      "database": "sadb",
      "query": "SELECT \n    userid, COUNT(userid)\nFROM\n    `${tempVars(\"serverid\")}`\nGROUP BY \n    userid\nHAVING \n    COUNT(userid) > 1;",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "0",
      "varName": "test",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "TWNMv8xf6u4",
      "database": "sadb",
      "query": "DELETE t1 FROM `${tempVars(\"serverid\")}` t1\n        INNER JOIN\n    `${tempVars(\"serverid\")}` t2 \nWHERE\n    t1.id > t2.id AND t1.userid = t2.userid;",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    },
    {
      "storage": "1",
      "varName": "test",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "TWNMv8xf6u4",
      "database": "sadb",
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
      "value": "${tempVars(\"test\")[2].userid}",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "exist3",
      "changeType": "0",
      "value": "${tempVars(\"test\")[3].userid}",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "exist4",
      "changeType": "0",
      "value": "${tempVars(\"test\")[4].userid}",
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
      "storage": "1",
      "varName": "exist0",
      "comparison": "0",
      "value": "",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "54",
      "name": "Check Variable"
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
      "dataName": "9",
      "defaultVal": "\"None!\"",
      "storage": "1",
      "varName2": "9",
      "name": "Store Server Data"
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
      "storage": "1",
      "varName": "myLevel",
      "comparison": "3",
      "value": "5",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Variable"
    },
    {
      "time": "15",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hastalked",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "myLevel",
      "comparison": "3",
      "value": "10",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Variable"
    },
    {
      "time": "25",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hastalked",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "myLevel",
      "comparison": "3",
      "value": "15",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Variable"
    },
    {
      "time": "45",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hastalked",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "myLevel",
      "comparison": "3",
      "value": "25",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "0",
      "iffalseVal": "3",
      "name": "Check Variable"
    },
    {
      "time": "60",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "hastalked",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "comType": "3"
}