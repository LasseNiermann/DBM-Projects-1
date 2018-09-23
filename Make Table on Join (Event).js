{
  "name": "Create Table on Join",
  "temp": "",
  "event-type": "4",
  "_id": "xlJWH",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Server Info"
    },
    {
      "storage": "0",
      "varName": "",
      "hostname": "localhost",
      "port": "3306",
      "username": "root",
      "password": "",
      "database": "",
      "query": "CREATE TABLE `${tempVars(\"id\")}` (\n    ID int NOT NULL AUTO_INCREMENT,\n    userid varchar(255) NOT NULL,\n    xp int(255),\n    PRIMARY KEY (ID)\n); ",
      "otype": "0",
      "debugMode": "1",
      "name": "Run SQL Query"
    }
  ]
}