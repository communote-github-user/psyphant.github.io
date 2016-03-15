---
title: 3 Maintenance
tags: [installation]
keywords: installation, maintenance
last_updated: March 10, 2016
---

## 3.1 Log files

The location of the log files depends on the chosen installation type. In case you installed the Linux package with integration script the Communote logs will be stored in:
``<communote.data.dir>/log/communote.log``.
In case you installed the Linux or Windows package without script the Communote logs will be stored in:
``COMMUNOTE_INSTALL_DIR/communote/logs/communote.log``.

At the start of Communote a file ``communote-startup.log`` will be created. This is located in the bin folder of the executive Tomcats. The location of these log files cannot be changed.

During the initialization, Communote is trying to configure logging. For this it needs a ``log4j.properties`` file, which must be located in the configuration directory of Communote ([see chapter "Installing as a WAR"](install_communote.html#by-deploying-war-file) -> ``communote.config.dir``). This file should be created and configured, as otherwise it may happen that important error messages aren't logged . An example of the log4j.properties configuration is shown below. The paths of the log files are configured at the beginning. Usually there is nothing else to adjust but the paths.

```properties
# info: lines starting with a hash character like this one are treated as comments

log4j.threshold=INFO
log4j.rootLogger=INFO

# Appender that logs all messages to a file. This definition supports log file rotation when the file reaches a given size.
log4j.appender.std_log=org.apache.log4j.RollingFileAppender
# Assign the absolute path to the file the logger should write to. The path separator has to be a
# slash (even on Windows systems). A colon must be escaped with a backslash, e.g. C:\temp\communote.log
# must be written as C\:/temp/communote.log
log4j.appender.std_log.File=ABSOLUTE_PATH_TO_LOG_FOLDER/communote.log
log4j.appender.std_log.MaxFileSize=5000KB
log4j.appender.std_log.MaxBackupIndex=5
log4j.appender.std_log.layout=org.apache.log4j.PatternLayout
log4j.appender.std_log.layout.ConversionPattern=%d{ISO8601} %p %t %c - %m%n
log4j.appender.std_log.Threshold=INFO

# Appender that logs only error messages to a file.
log4j.appender.error_log=org.apache.log4j.RollingFileAppender
# Assign the absolute path to the file the logger should write to.  See above for further details.
log4j.appender.error_log.File=ABSOLUTE_PATH_TO_LOG_FOLDER/communote-error.log
log4j.appender.error_log.MaxFileSize=5000KB
log4j.appender.error_log.MaxBackupIndex=5
log4j.appender.error_log.layout=org.apache.log4j.PatternLayout
log4j.appender.error_log.layout.ConversionPattern=%d{ISO8601} %p %t %c - %m%n
log4j.appender.error_log.Threshold=ERROR
#Rolling appender for missing message keys
log4j.appender.missingLocalization=org.apache.log4j.RollingFileAppender
# Assign the absolute path to the file the logger should write to.  See above for further details.
log4j.appender.missingLocalization.File=ABSOLUTE_PATH_TO_LOG_FOLDER/communote-missing-localization.log
log4j.appender.missingLocalization.MaxFileSize=5000KB
log4j.appender.missingLocalization.layout=org.apache.log4j.PatternLayout
log4j.appender.missingLocalization.layout.ConversionPattern=%d{ISO8601} - %m%n
log4j.appender.missingLocalization.Threshold=WARN
log4j.logger.missingLocalization.de.communardo.kenmei.core.api.common.messages=WARN, missingLocalization

log4j.logger.com.communote=INFO
log4j.logger.com.communote.server.web.commons.filter=ERROR
log4j.logger.de.communardo=INFO, std_log, error_log
log4j.logger.org=WARN, std_log, error_log
log4j.logger.com=WARN, std_log, error_log
log4j.logger.net=WARN, std_log, error_log
```

## 3.2 Starting Communote

For WAR file based installations just start and stop the Tomcat as usual. On Linux systems you should be careful to run the commands with the correct user account.
For the other installation types do it as follows.
With **Linux** you may start or stop Communote with the following command line statements:

```sh
su PRIVILEGED_USER
COMMUNOTE_INSTALL_DIR/communote/bin/startup.sh
COMMUNOTE_INSTALL_DIR/communote/bin/shutdown.sh
```

Please check after stopping Communote that the process has been stopped as well.
Note: the ``PRIVILEGED_USER`` is the user that should be allowed to run the application. For installations with the integration script it is the user you selected during script execution. For installations without script it is the user created or selected in the installation step ([see chapter "Installing as a WAR"](install_communote.html#without-system-integration-script)).
With **Windows** you may start or stop Communote with the following command line statements:

```sh
COMMUNOTE_INSTALL_DIR/communote/bin/startup.bat
COMMUNOTE_INSTALL_DIR/communote/bin/shutdown.bat
```
