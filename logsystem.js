{
  "name": "logsystem",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "WQMxD",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "dataName": "log_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "log_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "deleted_count",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "del_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "edit_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "edit_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "cc_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "cc_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "ml_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "ml_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "rc_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "rc_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "rd_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "rd_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "ru_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "ru_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "vcc_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "vcc_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "vcd_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "vcd_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "cd_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "cd_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "cu_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "cu_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "mj_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "mj_sys",
      "name": "Store Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Total: **${tempVars(\"log_sys\")}**\nDeleted Messages: **${tempVars(\"del_sys\")}**\nEdited Messages: **${tempVars(\"edit_sys\")}**\nChannels Created: **${tempVars(\"cc_sys\")}**\nChannels Deleted: **${tempVars(\"cd_sys\")}**\nChannels Updated: **${tempVars(\"cu_sys\")}**\nMembers Left: **${tempVars(\"ml_sys\")}**\nMembers Joined: **${tempVars(\"mj_sys\")}**\nRoles Created: **${tempVars(\"rc_sys\")}**\nRoles Deleted: **${tempVars(\"rd_sys\")}**\nRoles Updated: **${tempVars(\"ru_sys\")}**\nVoice Channels Created: **${tempVars(\"vcc_sys\")}**\nVoice Channels Deleted: **${tempVars(\"vcd_sys\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ]
}