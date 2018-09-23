
# XP System
This is an XP system  that has a leaderboard and uses SQL to run.

### Made by Totally not Two#2131 and Dog#5567
(SQL System by TNT - XP System by Dog)

## Requirements
- DBM Beta & (beta) mods
- MySQL
- a brain

## How to download MySQL
Go to [this link](https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-community-5.7.23.0.msi) and run the installer.

When in the installer, don't forget to select the [Server Only Option](http://prntscr.com/kxs16i)

The rest of the installer options should be default just don't forget your password!

After you have installed MySql, open up the [command line](
https://gyazo.com/6f9fe4134e330a76defa303abee34e28), and type "CREATE DATABASE (enter in a name that you'll remember); "  For example "CREATE DATABASE dog;"

Next, insert the commands and event in DBM and edit ALL of the Run Sql Query actions and press show connection options, in the connection options insert your password, and database you just created ( the port and host should be the default settings for mysql)

Lastly, make your bot rejoin and run the commands, and it should work.

To make sure it worked, in the mysql command line type "USE (database);" then type in "show tables;" it should show a table that has your server id. [Final Result](https://image.prntscr.com/image/fr0JbH0BSCq_clF2MhsEOw.png)
