---
title: 5 Communote Extensions
tags: [installation]
keywords: installation, plugins
last_updated: March 10, 2016
---

Communote can be extended with plugins. The installation and uninstalling of such additional plugins is described in this section. Take look at [this chapter](dev_how_plugin.html) if you want to know how to develop such plugins.

## 5.1 Installation of a Communote plugin

A Communote plugin is a JAR file which has to be copied to the Communote plugin-directory to get installed. The Communote plugin-directory is usually the subdirectory ``plugins`` of the Communote data-directory defined during the installation.

A plugin can be installed at runtime. A restart of Communote is normally not necessary and the new features should be available immediately. After installing a plugin which alters the Communote frontend the user has to refresh the page in the browser for the changes to become effective.

After the installation the plugin will be listed in the Communote administration area under **Extensions > Overview**.

## 5.2 Uninstalling of a Communote plugin

To uninstall a plugin the JAR file has just to be removed from the plugin-directory. A restart is usually not necessary.

## 5.3 Update of a Communote plugin

To update an installed Communote plugin you just have to uninstall it first and install the new JAR file afterwards.
