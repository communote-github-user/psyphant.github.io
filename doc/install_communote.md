---
title: 2 Installation
tags: [getting_started]
keywords: installation, deployment, configuration
last_updated: March 10, 2016
---

## 2.1 Config Tomcat and deploy WAR

First of all rename your downloaded WAR file to `ROOT.war` and copy it to your Tomcat `webapps` directory. Remove the `ROOT` folder if it already exists.

You now have to configure the server before the first start:

1. You need a data folder for storing attachments and application data at a preferred location, for example `communote-data`. The Tomcat needs by the way read and write access.
2. Create a sub folder `communote` into the directory `conf` of your Tomcat installation and put a new file called `startup.properties` in it.
3. In this file you have to define the absolute path to the data directory of Communote you created at the first step. Do this by adding the following line: `communote.data.dir=C\:/communote-data`
   **Note for Windows**:
   In front of the colon (`:`) you have to add a backslash `\` and all backslashes in the path have to be replaced by normal slashes `/`.
   So instead of `C:\Communote\Data` write `C\:/Communote/Data`.
4. Open the file `context.xml` at the `conf` directory of your Tomcat installation and add the following lines between the elements `<context ...>` and `</context>`.
   Replace the value for `communote.config.dir` with the absolute path to the `startup.properties`: The path must be in the format of your operating system. (Slash in Linux and Backslash in Windows). Escaping characters as in step 3 is not necessary.

   ```xml
   <Environment name="communote.instance.name"
       type="java.lang.String"
       value="communote" />
   <Environment name="communote.config.dir"
       type="java.lang.String"
       value="Absolute path to the directory that contains startup.properties without any escaping" />
   ```         

5. Communote supports MS SQL, Oracle, PostgreSQL and MySQL. Download the JDBC driver    for your database system and copy the JAR file to the `lib` directory of your     Tomcat installation.

   **For MySQL**

   Go to the PostgreSQL shell:

   ```shell
   mysql -u root -p mysqlpwd
   ```

   First create a database for Communote and replace `communote_db_name` with the name of the database for Communote to use:

   ```sql
   CREATE DATABASE communote_db_name CHARACTER SET utf8 COLLATE utf8_general_ci;
   ```

   For security reasons a separated database user should be created and the database access to the Communote database should be limited. To do this execute the following statements in the MySQL Shell:

   ```sql
   GRANT ALL PRIVILEGES ON communote_db_name.* TO 'communote_db_user'@'IP_COMMUNOTE_SERVER' IDENTIFIED BY 'communote_db_password';
   FLUSH PRIVILEGES;
   ```

   Replace `communote_db_name`, `communote_db_user` and `communote_db_password` with the database name, the database user and the database password. The `IP_COMMUNOTE_SERVER` needs to replaced by the IP of the Communote server. Copy and paste this line if you need other servers to access the database as well (e.g. for administrative access).

   **For PostgreSQL**

   Go to the PostgreSQL shell:

   ```shell
   psql -U postgres -W
   ```

   It is recommended to use a separate database user with rights to access the communote database. You can create a new user with the following statement in the PostgreSQL shell:

   ```sql
   CREATE USER communote_db_username NOCREATEDB NOCREATEROLE NOCREATEUSER ENCRYPTED PASSWORD 'communote_db_password';
   ```

   Replace `communote_db_username` and `communote_db_password` with the name of the database user and the password.

   The database can be then created with:

   ```sql
   CREATE DATABASE communote OWNER communote_db_username ENCODING 'UTF8';
   ```

6. Now you can start your server.

## 2.2 Install Communote

Start your browser for the final installation and go to the homepage of your own Communote instance. By default it is accessible on the same host at `http://localhost:8080/`.

Now you should see the start screen of the web installer:

![](images/dev/installer_start.png)

_Figure "Communote Installer Startpage"_

Follow the single steps. Every step and input is described in the installer. After a successful installation the installer should forward you to the login page of your Communote instance. There you can log in with your previously specified login data.
